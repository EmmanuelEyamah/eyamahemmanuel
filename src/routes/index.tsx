import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Home } from "@/pages";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}
