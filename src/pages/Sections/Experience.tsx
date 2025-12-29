import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  Sparkles,
  Code2,
  Rocket,
  Users,
} from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Progfams Technology",
    role: "Full-Stack Developer",
    type: "Contract",
    period: "2024",
    location: "Remote",
    description:
      "Led end-to-end development of enterprise web applications, architecting scalable solutions from database design to polished user interfaces.",
    achievements: [
      "Architected and deployed 3 production-ready web applications serving 10,000+ users",
      "Implemented real-time features using WebSocket, reducing data sync latency by 70%",
      "Optimized backend APIs resulting in 45% faster response times",
      "Collaborated with cross-functional teams to deliver projects 2 weeks ahead of schedule",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    icon: Rocket,
  },
  {
    id: 2,
    company: "Teranuim Co",
    role: "Full-Stack Developer",
    type: "Full-time",
    period: "2024",
    location: "Remote",
    description:
      "Developed and maintained complex full-stack applications, integrating modern frontend frameworks with robust backend systems.",
    achievements: [
      "Built scalable REST APIs handling 100,000+ daily requests with 99.9% uptime",
      "Designed and implemented secure authentication systems using JWT and OAuth",
      "Reduced application load time by 60% through code optimization and lazy loading",
      "Mentored junior developers on best practices in React and Node.js development",
    ],
    technologies: ["React", "TypeScript", "Express.js", "MongoDB", "Redis"],
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    icon: Code2,
  },
  {
    id: 3,
    company: "Connect Hive",
    role: "Frontend Developer",
    type: "Full-time",
    period: "2023 - 2025",
    location: "Remote",
    description:
      "Transformed design mockups into pixel-perfect, responsive user interfaces while ensuring optimal performance and accessibility.",
    achievements: [
      "Converted 50+ UI/UX designs into production-ready React components",
      "Improved website performance scores from 65 to 95+ on Google Lighthouse",
      "Implemented responsive designs supporting 10+ device breakpoints",
      "Established component library reducing development time by 40%",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Figma"],
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    icon: Users,
  },
];

export const Experience = () => {
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
              Professional Journey
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
              Work
            </span>{" "}
            <span className="bg-gradient-to-r from-primary via-[#3A63D1] to-[#2F54A3] bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Building exceptional digital products across diverse industries,
            delivering innovation and excellence at every step.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary to-primary/50 hidden sm:block" />

          {/* Experience Cards */}
          <div className="space-y-12 lg:space-y-16">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                experience={exp}
                index={index}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {[
            { label: "Years Experience", value: "5+" },
            { label: "Projects Completed", value: "50+" },
            { label: "Companies Worked", value: "3+" },
            { label: "Client Satisfaction", value: "100%" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center p-6 rounded-2xl bg-muted/50 border border-border hover:bg-muted transition-all"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-primary to-[#3A63D1] bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
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

interface ExperienceCardProps {
  experience: (typeof experiences)[0];
  index: number;
  isEven: boolean;
}

const ExperienceCard = ({ experience, index, isEven }: ExperienceCardProps) => {
  const Icon = experience.icon;

  return (
    <motion.div
      className={`relative flex items-center ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col gap-8`}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      {/* Timeline Dot */}
      <motion.div
        className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-[#3A63D1] to-[#2F54A3] flex items-center justify-center shadow-lg shadow-primary/20 z-10 hidden sm:flex"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
      >
        <Icon className="w-8 h-8 text-white" />
      </motion.div>

      {/* Card */}
      <motion.div
        className={`w-full md:w-[calc(50%-4rem)] ${
          isEven ? "md:pr-8" : "md:pl-8"
        }`}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-muted/50 to-muted border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
          {/* Gradient Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${experience.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
          />

          {/* Content */}
          <div className="relative">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-black text-foreground mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-[#3A63D1] group-hover:bg-clip-text transition-all">
                  {experience.role}
                </h3>
                <p className="text-lg font-bold text-primary mb-3">
                  {experience.company}
                </p>
              </div>
              <div className="sm:hidden">
                <Icon className="w-10 h-10 text-primary" />
              </div>
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
                <Briefcase className="w-4 h-4" />
                {experience.type}
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted border border-border text-foreground text-sm font-medium">
                <Calendar className="w-4 h-4" />
                {experience.period}
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted border border-border text-foreground text-sm font-medium">
                <MapPin className="w-4 h-4" />
                {experience.location}
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-6">
              {experience.description}
            </p>

            {/* Achievements */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-foreground mb-3">
                Key Achievements:
              </h4>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <div
                      className={`flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${experience.gradient} mt-2`}
                    />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-sm font-bold text-foreground mb-3">
                Technologies:
              </h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-background border border-border text-foreground text-xs font-medium hover:border-primary/50 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Shine Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
