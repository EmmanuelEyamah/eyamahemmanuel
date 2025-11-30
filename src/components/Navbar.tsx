import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";
import { useNavigate, useLocation } from "@tanstack/react-router";

const navLinks = [
  { name: "Home", href: "#hero", type: "scroll" },
  { name: "Services", href: "#services", type: "scroll" },
  { name: "Projects", href: "#projects", type: "scroll" },
  { name: "Experience", href: "#experience", type: "scroll" },
  { name: "Skills", href: "#skills", type: "scroll" },
  { name: "About", href: "#aboutme", type: "scroll" },
  { name: "Contact", href: "#contact", type: "scroll" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Get all sections that can be scrolled to
      const sections = navLinks
        .filter((link) => link.type === "scroll")
        .map((link) => link.href.substring(1));

      // Find the active section based on scroll position
      let foundActiveSection = false;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Section is active if it's in the viewport (with some offset)
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            foundActiveSection = true;
            break;
          }
        }
      }

      // If no section is found and we're at the top, set hero as active
      if (!foundActiveSection && window.scrollY < 100) {
        setActiveSection("hero");
      }
    };

    handleScroll(); // Run once on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavClick = (link: (typeof navLinks)[0]) => {
    if (link.type === "scroll") {
      // If we're not on the home page, navigate there first
      if (location.pathname !== "/") {
        navigate({ to: "/" }).then(() => {
          setTimeout(() => scrollToSection(link.href), 100);
        });
      } else {
        scrollToSection(link.href);
      }
    } else {
      navigate({ to: link.href });
      setIsMobileMenuOpen(false);
    }
  };

  const isLinkActive = (link: (typeof navLinks)[0]) => {
    if (link.type === "link") {
      return location.pathname === link.href;
    }
    return activeSection === link.href.substring(1);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-background/70 via-background/80 to-background/70 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "bg-gradient-to-r from-transparent via-background/5 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo with Gradient */}
          <motion.a
            href="/"
            className="flex items-center group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              navigate({ to: "/" });
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-lg sm:text-xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Eyamah
              </span>
              <span className="bg-gradient-to-r from-primary via-primary to-[#3A63D1] bg-clip-text text-transparent">
                Emmanuel
              </span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                onClick={() => handleNavClick(link)}
                className={`relative px-3 lg:px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isLinkActive(link)
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
                {isLinkActive(link) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-lg -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Theme Toggle with Animation */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-foreground/70 hover:text-primary hover:bg-primary/10 transition-all duration-200"
              aria-label="Toggle theme"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence mode="wait">
                {theme === "dark" ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* CTA Button with Gradient */}
            <motion.button
              onClick={() => {
                if (location.pathname !== "/") {
                  navigate({ to: "/" }).then(() => {
                    setTimeout(() => scrollToSection("#contact"), 100);
                  });
                } else {
                  scrollToSection("#contact");
                }
              }}
              className="relative px-5 lg:px-6 py-2 bg-gradient-to-r from-primary via-primary to-[#3A63D1] text-primary-foreground text-sm font-semibold rounded-lg overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Let's Talk</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#3A63D1] via-primary to-[#2F54A3]"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>

          {/* Mobile Right Side */}
          <div className="flex md:hidden items-center space-x-2">
            {/* Theme Toggle Mobile */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-foreground/70 hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="Toggle theme"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence mode="wait">
                {theme === "dark" ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-foreground hover:bg-primary/10 transition-colors"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 bg-gradient-to-b from-background/95 to-background/90 backdrop-blur-xl border-b border-border/50 shadow-xl">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className={`w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                    isLinkActive(link)
                      ? "text-primary bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5"
                      : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                  }`}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.button
                onClick={() => {
                  if (location.pathname !== "/") {
                    navigate({ to: "/" }).then(() => {
                      setTimeout(() => scrollToSection("#contact"), 100);
                    });
                  } else {
                    scrollToSection("#contact");
                  }
                  setIsMobileMenuOpen(false);
                }}
                className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-primary via-primary to-[#3A63D1] text-primary-foreground text-base font-semibold rounded-lg shadow-sm"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Let's Talk
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
