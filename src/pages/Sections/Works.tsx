import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import {
  ExternalLink,
  Github,
  Sparkles,
  ArrowRight,
  Globe,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "IGBOCLASS",
    category: "LMS Platform",
    description:
      "Comprehensive Learning Management System revolutionizing native language education. Features multi-role registration for schools, tutors, and students with advanced tutor matching algorithms.",
    image: "/assets/igboclass.png",
    link: "https://igboclass.com",
    github: "",
    tech: ["React", "Laravel", "MySQL", "ZoomApi"],
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    id: 2,
    title: "RootMylk",
    category: "E-Commerce",
    description:
      "Premium health-focused e-commerce platform specializing in nutritious tigernut-based products. Features seamless shopping experience with integrated payment systems.",
    image: "/assets/rootmylk.png",
    link: "https://rootmylk.com",
    github: "",
    tech: ["React", "Paystack", "MySQL", "Tailwind"],
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
  },
  {
    id: 3,
    title: "Nikhil Edutech",
    category: "EdTech Platform",
    description:
      "Revolutionary financial education platform teaching youth the art of professional trading with comprehensive courses and real-time market simulations.",
    image: "/assets/nikhil.png",
    link: "https://nikhil-kohl.vercel.app",
    github: "",
    tech: ["Next.js", "TypeScript", "Chart.js", "Vercel"],
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
  },
  {
    id: 4,
    title: "Wellness with Winifried",
    category: "Wellness E-Commerce",
    description:
      "Empowering women's health through curated wellness products and expert guidance. Complete e-commerce solution with health tracking features.",
    image: "/assets/wellness.png",
    link: "https://winifredayeniwellness-rd.vercel.app/",
    github: "",
    tech: ["React", "Laravel", "Paystack", "Tanstack"],
    gradient: "from-pink-500 via-rose-500 to-red-500",
  },
  {
    id: 5,
    title: "Joshua Yunusa",
    category: "Creator Platform",
    description:
      "Personal brand platform for digital content creator mastering YouTube algorithms. Features comprehensive courses on building profitable YouTube channels.",
    image: "/assets/joshua.png",
    link: "https://joshuayunusa.com",
    github: "",
    tech: ["React", "Email Service", "MySQL", "Tailwind"],
    gradient: "from-red-500 via-orange-500 to-amber-500",
  },
  {
    id: 6,
    title: "GoSobo",
    category: "Competitive Marketplace",
    description:
      "Innovative competitive writing marketplace where creativity meets competition. Writers submit entries, community votes, and winners earn rewards.",
    image: "/assets/gosobo.png",
    link: "https://gosobo.net",
    github: "",
    tech: ["React", "Paystack", "Laravel", "MySQL"],
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
  },
];

export const Works = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
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

  return (
    <section
      ref={containerRef}
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-white dark:bg-[#0A0A0A]"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white dark:from-[#0A0A0A] dark:via-[#111111] dark:to-[#0A0A0A]" />
        <motion.div className="absolute inset-0 opacity-30" style={{ opacity }}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,125,251,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(58,99,209,0.15),transparent_50%)]" />
        </motion.div>
        <motion.div
          style={{ y }}
          className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(76,125,251,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(76,125,251,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(76,125,251,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(76,125,251,0.05)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000,transparent)]" />
      </div>

      <div className="relative max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
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
              Featured Work
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
              Recent
            </span>{" "}
            <span className="bg-gradient-to-r from-primary via-[#3A63D1] to-[#2F54A3] bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A showcase of impactful digital solutions built with cutting-edge
            technologies, delivering exceptional results for clients across
            diverse industries.
          </motion.p>
        </motion.div>

        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {projects.slice(0, 2).map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                hoveredProject={hoveredProject}
                setHoveredProject={setHoveredProject}
              />
            ))}
          </div>

          {projects[2] && (
            <ProjectCard
              project={projects[2]}
              index={2}
              hoveredProject={hoveredProject}
              setHoveredProject={setHoveredProject}
              fullWidth
            />
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(3).map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index + 3}
              hoveredProject={hoveredProject}
              setHoveredProject={setHoveredProject}
            />
          ))}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold">
              <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                Have a project in mind?
              </span>
            </h3>
            <p className="text-muted-foreground text-lg">
              I've also built several applications and enterprise solutions.
              Let's discuss how I can bring your ideas to life.
            </p>
            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary via-[#3A63D1] to-[#2F54A3] text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-primary/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Work Together
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
  hoveredProject: number | null;
  setHoveredProject: (id: number | null) => void;
  fullWidth?: boolean;
}

const ProjectCard = ({
  project,
  index,
  setHoveredProject,
  fullWidth,
}: ProjectCardProps) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.div
      ref={cardRef}
      className={`group relative ${fullWidth ? "min-h-[500px]" : "min-h-[600px]"} rounded-3xl overflow-hidden bg-white dark:bg-[#0A0A0A] border border-border hover:border-primary/50 transition-all duration-300`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
      whileHover={{ y: -8 }}
    >
      {/* Image Section - Responsive for mobile and desktop */}
      <motion.div
        className={`absolute inset-0 ${fullWidth ? "h-[65%] lg:h-[50%]" : "h-[60%] lg:h-[60%]"}`}
        style={{ y }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30 mix-blend-overlay`}
        />
      </motion.div>

      <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
        <span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs sm:text-sm font-semibold">
          {project.category}
        </span>
        <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white/60" />
      </div>

      <div
        className={`absolute inset-x-0 bottom-0 ${fullWidth ? "h-[48%] lg:h-[50%]" : "h-[43%] lg:h-[50%]"} bg-white dark:bg-[#0A0A0A] backdrop-blur-xl`}
      >
        <div className="h-full flex flex-col justify-between p-5 sm:p-6 lg:p-10">
          <div className="space-y-3 sm:space-y-4">
            <h3
              className={`${fullWidth ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl sm:text-2xl lg:text-3xl"} font-black text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-[#3A63D1] group-hover:bg-clip-text transition-all duration-300`}
            >
              {project.title}
            </h3>

            <p
              className={`text-muted-foreground ${fullWidth ? "text-sm sm:text-base lg:text-lg" : "text-xs sm:text-sm lg:text-base"} leading-relaxed`}
            >
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] sm:text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 mt-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-gradient-to-r from-primary to-[#3A63D1] text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 z-10 relative text-xs sm:text-sm lg:text-base"
              onClick={(e) => e.stopPropagation()}
            >
              <span>View Project</span>
              <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 z-10 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </motion.div>
  );
};
