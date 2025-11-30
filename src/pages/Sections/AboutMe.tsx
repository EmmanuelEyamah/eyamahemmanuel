import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Sparkles,
  Target,
  Rocket,
  Users,
  Code2,
  Brain,
  Zap,
  TrendingUp,
} from "lucide-react";

const story = {
  intro: {
    title: "The Journey Begins",
    content:
      "From the first moment I wrote a line of code, I knew this was more than a skill — it was a creative tool. A way to build things that didn't exist before. A way to solve problems. A way to make ideas come alive on screen.",
  },
  evolution: {
    title: "Growing Beyond Code",
    content:
      "Over time, I've grown into a developer who cares deeply about how users interact with products, how systems scale behind the scenes, and how to bring clarity and simplicity to complex challenges.",
  },
  philosophy: {
    title: "My Philosophy",
    content:
      "Coding, for me, is not just about completing tasks — it's about building experiences that feel smooth, intuitive, and reliable. Every line of code is an opportunity to create something meaningful.",
  },
};

const strengths = [
  {
    icon: Brain,
    title: "Product-Minded Thinking",
    description:
      "I look beyond the code and focus on user needs, product flow, and real value.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Code2,
    title: "Full-Stack Engineering",
    description:
      "I work across both front-end and backend, delivering complete solutions from idea to deployment.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Zap,
    title: "Efficient & Clean Execution",
    description:
      "I move quickly while keeping my code organized, scalable, and maintainable.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Target,
    title: "Problem-Solving Approach",
    description:
      "I enjoy breaking down complex requirements into simple, elegant engineering steps.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Users,
    title: "Strong Communication",
    description:
      "I explain my ideas clearly and collaborate effectively with teams, designers, and clients.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: TrendingUp,
    title: "Business & Analytical Insight",
    description:
      "I understand how features affect business goals and user behavior, helping teams make better decisions.",
    gradient: "from-cyan-500 to-blue-500",
  },
];

const focusAreas = [
  "Building scalable full-stack applications",
  "Improving architecture skills with Next.js and Node.js",
  "Enhancing user experience through smooth UI systems",
  "Learning advanced deployment and performance techniques",
  "Creating digital products that solve real problems",
];

export const AboutMe = () => {
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
          className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
          className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-[#3A63D1]/20 rounded-full blur-[120px]"
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
            <span className="text-primary text-sm font-semibold">My Story</span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
              About
            </span>{" "}
            <span className="bg-gradient-to-r from-primary via-[#3A63D1] to-[#2F54A3] bg-clip-text text-transparent">
              Me
            </span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Turning ideas into reality through clean code, thoughtful design,
            and a passion for building experiences that matter.
          </motion.p>
        </motion.div>

        {/* Story Section with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image Side */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-lg">
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
                  src="/assets/IMG_7050.PNG"
                  alt="Eyamah Emmanuel"
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                className="absolute -top-6 -right-6 z-20 px-6 py-4 bg-white/90 dark:bg-[#0A0A0A]/90 backdrop-blur-xl rounded-2xl border border-primary/20 shadow-xl"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="text-center">
                  <div className="text-3xl font-black bg-gradient-to-r from-primary to-[#3A63D1] bg-clip-text text-transparent">
                    100%
                  </div>
                  <div className="text-xs text-muted-foreground font-semibold">
                    Client Satisfaction
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 z-20 px-6 py-4 bg-white/90 dark:bg-[#0A0A0A]/90 backdrop-blur-xl rounded-2xl border border-[#3A63D1]/20 shadow-xl"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="text-center">
                  <div className="text-3xl font-black bg-gradient-to-r from-primary to-[#3A63D1] bg-clip-text text-transparent">
                    3+
                  </div>
                  <div className="text-xs text-muted-foreground font-semibold">
                    Companies
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Story Text Side */}
          <motion.div
            className="space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Story Cards */}
            {Object.values(story).map((section, index) => (
              <motion.div
                key={section.title}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-muted/50 to-muted border border-border hover:border-primary/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-[#3A63D1]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-[#3A63D1]" />
                    <h3 className="text-xl font-black text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-[#3A63D1] group-hover:bg-clip-text transition-all">
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          className="relative mb-20 p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-[#3A63D1]/10 to-primary/10 border border-primary/20 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,125,251,0.1),transparent_70%)]" />
          <div className="relative text-center max-w-4xl mx-auto">
            <motion.div
              className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/20 border border-primary/30"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-semibold">
                My Mission
              </span>
            </motion.div>
            <h3 className="text-3xl lg:text-4xl font-black mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Bringing Ideas to Life
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To help founders, creators, and teams{" "}
              <span className="text-primary font-semibold">
                bring their ideas to life
              </span>{" "}
              — through clean engineering, thoughtful design, and solid
              development practices. If you can imagine it, I can help you build
              it.
            </p>
          </div>
        </motion.div>

        {/* Strengths Grid */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                What I Bring to the
              </span>{" "}
              <span className="bg-gradient-to-r from-primary to-[#3A63D1] bg-clip-text text-transparent">
                Table
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <motion.div
                  key={strength.title}
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-muted/50 to-muted border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${strength.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  <div className="relative">
                    <div
                      className={`inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br ${strength.gradient} items-center justify-center mb-4 shadow-lg`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-[#3A63D1] group-hover:bg-clip-text transition-all">
                      {strength.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Current Focus */}
        <motion.div
          className="relative p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-muted/50 to-muted border border-border overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-[#3A63D1]/5" />
          <div className="relative">
            <div className="text-center mb-8">
              <motion.div
                className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Target className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-semibold">
                  Current Focus
                </span>
              </motion.div>
              <h3 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                What I'm Working On
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={area}
                  className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-border hover:border-primary/50 transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-gradient-to-br from-primary to-[#3A63D1] flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <p className="text-foreground font-medium">{area}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
