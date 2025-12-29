import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "Nest.js",
  "React Native",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Git & GitHub",
  "Docker",
  "AWS",
  "Vercel",
  "REST API",
  "GraphQL",
  "Redis",
  "JWT",
  "Framer Motion",
];

export const Skills = () => {
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(58,99,209,0.15),transparent_50%)]" />
        </motion.div>
        <motion.div
          style={{ y }}
          className="absolute top-[15%] right-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-80, 80]) }}
          className="absolute bottom-[15%] left-[10%] w-[450px] h-[450px] bg-[#3A63D1]/20 rounded-full blur-[120px]"
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
              Tech Stack
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
              Full-Stack
            </span>{" "}
            <span className="bg-gradient-to-r from-primary via-[#3A63D1] to-[#2F54A3] bg-clip-text text-transparent">
              Technologies
            </span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Specialized in building modern web and mobile applications with the
            JavaScript ecosystem.
          </motion.p>
        </motion.div>

        {/* Technology Tags */}
        <motion.div
          className="relative p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-muted/50 to-muted border border-border overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-[#3A63D1]/5" />
          <div className="relative">
            <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  className="group relative px-5 py-2.5 rounded-xl bg-background border border-border hover:border-primary/50 transition-all cursor-default overflow-hidden"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.03,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.1, y: -4 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-[#3A63D1]/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative text-sm font-semibold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-[#3A63D1] group-hover:bg-clip-text transition-all">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {[
            { label: "Years Experience", value: "5+" },
            { label: "Projects Built", value: "50+" },
            { label: "Technologies", value: "20+" },
            { label: "Success Rate", value: "100%" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-muted/50 to-muted border border-border hover:border-primary/50 transition-all"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
            >
              <motion.div
                className="text-3xl md:text-4xl font-black bg-gradient-to-r from-primary to-[#3A63D1] bg-clip-text text-transparent mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 + 0.2 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
