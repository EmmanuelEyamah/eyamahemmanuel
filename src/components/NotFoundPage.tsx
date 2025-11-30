import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl dark:bg-primary/15"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#3A63D1]/20 rounded-full blur-3xl dark:bg-[#3A63D1]/15"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 404 Number */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8"
        >
          <motion.h1
            className="text-[150px] sm:text-[200px] lg:text-[250px] font-black leading-none"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          >
            <span className="bg-gradient-to-r from-primary via-[#3A63D1] via-[#2F54A3] to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              404
            </span>
          </motion.h1>
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-[#3A63D1]/20 to-primary/20 blur-3xl -z-10 dark:from-primary/10 dark:via-[#3A63D1]/10 dark:to-primary/10" />
        </motion.div>

        {/* Error Icon */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <motion.div
            className="p-4 rounded-full bg-primary/10 text-primary dark:bg-primary/20"
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Search className="w-12 h-12 sm:w-16 sm:h-16" />
          </motion.div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4 mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Page Not Found
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Oops! The page you're looking for doesn't exist. It might have been
            moved or deleted. Let's get you back on track.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {/* Go Home Button */}
          <motion.button
            onClick={() => navigate({ to: "/" })}
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary via-primary to-[#3A63D1] text-primary-foreground font-semibold rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Home className="w-5 h-5" />
              Go Home
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#3A63D1] via-primary to-[#2F54A3]"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          {/* Go Back Button */}
          <motion.button
            onClick={() => window.history.back()}
            className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </motion.button>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <p className="text-sm text-muted-foreground mb-4">
            Or explore these pages:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Services", href: "#services" },
              { name: "Projects", href: "/projects" },
              { name: "Contact", href: "#contact" },
            ].map((link, index) => (
              <motion.button
                key={link.name}
                onClick={() => {
                  if (link.href.startsWith("#")) {
                    navigate({ to: "/" });
                    setTimeout(() => {
                      const element = document.getElementById(
                        link.href.substring(1)
                      );
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }, 100);
                  } else {
                    navigate({ to: link.href });
                  }
                }}
                className="px-4 py-2 text-sm font-medium text-primary hover:text-primary-foreground hover:bg-primary rounded-lg transition-all duration-200"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Floating Animation Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-20 h-20 bg-primary/10 rounded-full blur-xl dark:bg-primary/5"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-[#3A63D1]/10 rounded-full blur-xl dark:bg-[#3A63D1]/5"
          animate={{
            y: [0, 40, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};
