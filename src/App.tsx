import {
  ErrorComponent,
  RouterProvider,
  createRouter,
} from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { NotFoundPage } from "./components/NotFoundPage";
import { LoadingScreen } from "./components/LoadingScreen";
import { useState, useEffect } from "react";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 30, // 30 minutes - settings don't change often
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

const NotFoundScreen = () => {
  return <NotFoundPage />;
};

const router = createRouter({
  routeTree,
  defaultPendingComponent: LoadingScreen,
  defaultPendingMinMs: 1000,
  defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
  context: {
    auth: undefined!,
    queryClient,
  },
  defaultNotFoundComponent: NotFoundScreen,
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Show loading screen for 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 5000,
            style: {
              background: "#fff",
              color: "#252525",
              border: "1px solid #e5e5e5",
              padding: "16px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            },
            success: {
              icon: "🎉",
              style: {
                background: "#f0fdf4",
                color: "#4C7DFB",
                border: "1px solid #4C7DFB",
              },
            },
            error: {
              icon: "❌",
              style: {
                background: "#fef2f2",
                color: "#d32f2f",
                border: "1px solid #d32f2f",
              },
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
