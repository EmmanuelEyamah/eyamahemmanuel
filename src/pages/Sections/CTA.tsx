import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Rocket,
  Sparkles,
  MessageSquare,
  Calendar,
} from "lucide-react";
import { socialLinks } from "@/constants/socialLinks";

export const CTA = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 0.4]);

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
    <section
      ref={containerRef}
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-white dark:bg-[#0A0A0A]"
    >
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white dark:from-[#0A0A0A] dark:via-[#111111] dark:to-[#0A0A0A]" />
        <motion.div className="absolute inset-0 opacity-30" style={{ opacity }}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,125,251,0.2),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(58,99,209,0.2),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(47,84,163,0.2),transparent_50%)]" />
        </motion.div>
        <motion.div
          style={{ y }}
          className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
          className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-[#3A63D1]/20 rounded-full blur-[120px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(76,125,251,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(76,125,251,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(76,125,251,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(76,125,251,0.08)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000,transparent)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div style={{ scale }} className="relative">
          {/* Main CTA Card */}
          <div className="relative rounded-[3rem] overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#3A63D1] to-[#2F54A3]" />

            {/* Animated Pattern Overlay */}
            <motion.div
              className="absolute inset-0 opacity-20"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)",
                backgroundSize: "100% 100%",
              }}
            />

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:48px_48px]" />
            </div>

            {/* Content */}
            <div className="relative px-8 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
              <div className="max-w-4xl mx-auto text-center">
                {/* Icon */}
                <motion.div
                  className="inline-flex items-center justify-center mb-8"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: "spring" }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl" />
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/30 flex items-center justify-center">
                      <Rocket className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                    </div>
                  </div>
                </motion.div>

                {/* Heading */}
                <motion.h2
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Ready to Build Something
                  <br />
                  <span className="relative inline-block">
                    <span className="relative z-10">Amazing?</span>
                    <motion.span
                      className="absolute bottom-2 left-0 right-0 h-4 bg-white/20 rounded"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    />
                  </span>
                </motion.h2>

                {/* Description */}
                <motion.p
                  className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Let's turn your vision into reality. I'm here to build
                  powerful, scalable solutions that drive results and exceed
                  expectations.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <motion.button
                    onClick={scrollToContact}
                    className="group w-full sm:w-auto px-8 py-4 bg-white text-primary font-bold rounded-xl shadow-2xl hover:shadow-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start a Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  <motion.button
                    onClick={scrollToAbout}
                    className="group w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    About Me
                  </motion.button>
                </motion.div>

                {/* Stats */}
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  {[
                    { value: "5+", label: "Years Experience" },
                    { value: "50+", label: "Projects Delivered" },
                    { value: "100%", label: "Client Satisfaction" },
                    { value: "24h", label: "Response Time" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-white/80 font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Social Proof */}
                <motion.div
                  className="flex items-center justify-center gap-2 text-white/80 text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Trusted by startups and established companies</span>
                  <Sparkles className="w-4 h-4" />
                </motion.div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-10 right-10 w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
              animate={{
                y: [0, 20, 0],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-1/2 right-20 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
              animate={{
                x: [0, 20, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Additional Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <motion.div
              className="group p-6 rounded-2xl bg-gradient-to-br from-muted/50 to-muted border border-border hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-[#3A63D1] flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-[#3A63D1] group-hover:bg-clip-text transition-all">
                Free Consultation
              </h3>
              <p className="text-muted-foreground text-sm">
                Let's discuss your project goals and how I can help achieve them
              </p>
            </motion.div>

            <motion.div
              className="group p-6 rounded-2xl bg-gradient-to-br from-muted/50 to-muted border border-border hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-teal-500 group-hover:bg-clip-text transition-all">
                Flexible Engagement
              </h3>
              <p className="text-muted-foreground text-sm">
                Full-time, part-time, or project-based — I adapt to your needs
              </p>
            </motion.div>

            <motion.div
              className="group p-6 rounded-2xl bg-gradient-to-br from-muted/50 to-muted border border-border hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all">
                Fast Delivery
              </h3>
              <p className="text-muted-foreground text-sm">
                Quality work delivered on time, every time, with no compromises
              </p>
            </motion.div>
          </div>

          {/* Connect Section */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-muted-foreground mb-4">Connect with me on</p>
            <div className="flex justify-center gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
