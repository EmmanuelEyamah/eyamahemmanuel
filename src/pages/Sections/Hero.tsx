import { motion } from "framer-motion";
import {
  ArrowRight,
  Smartphone,
  Globe,
  LayoutDashboard,
  PenTool,
  Code2,
  AppWindow,
  Webhook,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Marquee } from "@/components/Marquee";
import { socialLinks } from "@/constants/socialLinks";

const roles = [
  "Full-Stack Developer",
  "Mobile Developer",
  "Software Engineer",
  "Problem Solver",
];

const marqueeItems = [
  { text: "App Design", icon: Smartphone },
  { text: "Website Design", icon: Globe },
  { text: "Dashboard", icon: LayoutDashboard },
  { text: "Wireframe", icon: PenTool },
  { text: "Full-Stack Development", icon: Code2 },
  { text: "Mobile Apps", icon: AppWindow },
  { text: "API Integration", icon: Webhook },
];

export const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById("aboutme");
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Primary gradient orbs */}
          <motion.div
            className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
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
            className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#3A63D1]/20 rounded-full blur-3xl"
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

          {/* Additional gradient beams */}
          <motion.div
            className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-primary/15 to-[#2F54A3]/15 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/3 w-56 h-56 bg-gradient-to-tl from-[#3A63D1]/20 to-primary/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/2 w-48 h-48 bg-gradient-to-r from-primary/15 via-[#3A63D1]/15 to-[#2F54A3]/10 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.4, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Gradient lines/beams */}
          <motion.div
            className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-[#3A63D1]/10 to-transparent"
            animate={{
              opacity: [0.6, 0.3, 0.6],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Greeting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-2"
              >
                <motion.p
                  className="text-muted-foreground text-sm sm:text-base font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Hi, I am Eyamah Emmanuel
                </motion.p>

                {/* Main Title with Typewriter */}
                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-primary via-[#3A63D1] via-[#2F54A3] to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                      {displayText}
                      <span className="animate-pulse">|</span>
                    </span>
                    {/* Gradient glow effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/30 via-[#3A63D1]/30 to-primary/30 blur-2xl opacity-50 -z-10" />
                  </span>
                  <br />
                  <span className="text-foreground">+ Innovator</span>
                </motion.h1>
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-muted-foreground text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                I build modern web and mobile applications with React,
                TypeScript, and Node.js. Creating elegant, functional solutions
                that drive business impact.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <motion.button
                  onClick={scrollToContact}
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary via-primary to-[#3A63D1] text-primary-foreground font-semibold rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get In Touch
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#3A63D1] via-primary to-[#2F54A3]"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

                <motion.button
                  onClick={scrollToAbout}
                  className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  About Me
                </motion.button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex items-center gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <span className="text-sm text-muted-foreground font-medium">
                  Follow me:
                </span>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={social.name}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Right Content - Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
                {/* Gradient Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/30 via-[#3A63D1]/30 to-primary/30 rounded-3xl blur-3xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Image Container */}
                <motion.div
                  className="relative z-10 aspect-[3/4] rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl bg-gradient-to-br from-muted to-background"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/assets/profile.jpg"
                    alt="Eyamah Emmanuel"
                    className="w-full h-full object-cover object-center"
                  />
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute z-20 -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-2xl backdrop-blur-sm border border-primary/30 flex flex-col items-center justify-center shadow-lg"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="text-2xl font-bold text-primary">5+</span>
                  <span className="text-xs text-foreground/70 font-medium">
                    Years
                  </span>
                </motion.div>

                <motion.div
                  className="absolute z-20 -bottom-6 -left-6 w-28 h-28 bg-[#3A63D1]/20 rounded-2xl backdrop-blur-sm border border-[#3A63D1]/30 flex flex-col items-center justify-center shadow-lg"
                  animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="text-2xl font-bold text-primary">50+</span>
                  <span className="text-xs text-foreground/70 font-medium">
                    Projects
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center p-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div className="w-1 h-2 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Marquee Section */}
      <Marquee items={marqueeItems} speed={25} />
    </>
  );
};
