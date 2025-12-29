import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Sparkles,
  Lightbulb,
  Rocket,
  TrendingUp,
  ShoppingCart,
  DollarSign,
  Truck,
  Leaf,
} from "lucide-react";

const industries = [
  {
    icon: DollarSign,
    name: "Fintech",
    description: "Digital payments, banking solutions, financial platforms",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: ShoppingCart,
    name: "E-Commerce",
    description: "Online marketplaces, retail platforms, shopping experiences",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Truck,
    name: "Transport & Logistics",
    description: "Delivery systems, fleet management, tracking solutions",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Leaf,
    name: "AgriTech",
    description: "Farm management, supply chain, agricultural innovation",
    gradient: "from-green-500 to-emerald-500",
  },
];

export const Passion = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 0.4]);

  return (
    <section
      ref={containerRef}
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-white dark:bg-[#0A0A0A]"
    >
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white dark:from-[#0A0A0A] dark:via-[#111111] dark:to-[#0A0A0A]" />
        <motion.div className="absolute inset-0 opacity-30" style={{ opacity }}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,125,251,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(58,99,209,0.15),transparent_50%)]" />
        </motion.div>
        <motion.div
          style={{ y }}
          className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
          className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] bg-[#3A63D1]/20 rounded-full blur-[120px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(76,125,251,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(76,125,251,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(76,125,251,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(76,125,251,0.05)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000,transparent)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-semibold">
              What Drives Me
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
              Turning
            </span>{" "}
            <span className="bg-gradient-to-r from-primary via-[#3A63D1] to-[#2F54A3] bg-clip-text text-transparent">
              Ideas Into Reality
            </span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Beyond writing code, I'm passionate about transforming innovative
            ideas into tangible solutions that solve real-world problems.
          </motion.p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          className="relative mb-16 p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-[#3A63D1]/10 to-primary/10 border border-primary/20 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,125,251,0.1),transparent_70%)]" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Icons */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-md">
                {/* Central Icon */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-3xl bg-gradient-to-br from-primary via-[#3A63D1] to-[#2F54A3] flex items-center justify-center shadow-2xl z-10"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Lightbulb className="w-12 h-12 text-white" />
                </motion.div>

                {/* Orbiting Icons */}
                <motion.div
                  className="w-64 h-64 mx-auto relative"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {[Rocket, TrendingUp, DollarSign, ShoppingCart].map(
                    (Icon, idx) => (
                      <motion.div
                        key={idx}
                        className="absolute w-16 h-16 rounded-2xl bg-white dark:bg-[#0A0A0A] border-2 border-primary/30 flex items-center justify-center shadow-lg"
                        style={{
                          top: "50%",
                          left: "50%",
                          transform: `rotate(${idx * 90}deg) translate(120px) rotate(-${idx * 90}deg)`,
                        }}
                        animate={{
                          rotate: [-idx * 90, -idx * 90 - 360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <Icon className="w-8 h-8 text-primary" />
                      </motion.div>
                    )
                  )}
                </motion.div>
              </div>
            </div>

            {/* Right Side - Text */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-3xl lg:text-4xl font-black mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  It's Not Just About Code
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  For me, development is about more than syntax and frameworks.
                  It's about understanding a vision, seeing the potential, and
                  building something that makes a real difference.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Whether you're disrupting fintech, revolutionizing
                  agriculture, transforming e-commerce, or innovating in
                  logistics — if you have an idea that needs to come alive, I'm
                  here to help build it.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I thrive on taking abstract concepts and turning them into
                  functional, scalable products that users love and businesses
                  rely on.
                </p>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex -space-x-2">
                  {[Rocket, Lightbulb, TrendingUp].map((Icon, idx) => (
                    <div
                      key={idx}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-[#3A63D1] border-2 border-white dark:border-[#0A0A0A] flex items-center justify-center"
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-semibold text-foreground">
                  From concept to launch, I'm with you every step
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4">
              <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                Industries I'm Passionate
              </span>{" "}
              <span className="bg-gradient-to-r from-primary to-[#3A63D1] bg-clip-text text-transparent">
                About
              </span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you're building the next big thing in fintech or
              revolutionizing agriculture, I bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.name}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-muted/50 to-muted border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <div className="relative">
                    <div
                      className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.gradient} items-center justify-center mb-4 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-foreground mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-[#3A63D1] group-hover:bg-clip-text transition-all">
                      {industry.name}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {industry.description}
                    </p>
                  </div>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Got an idea that needs to become reality?
          </p>
          <motion.button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                const offset = 70;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition =
                  elementPosition + window.pageYOffset - offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }
            }}
            className="px-8 py-4 bg-gradient-to-r from-primary via-[#3A63D1] to-[#2F54A3] text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-primary/20 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Build It Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
