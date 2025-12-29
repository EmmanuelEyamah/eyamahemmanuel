import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Globe,
  Smartphone,
  Code2,
  ArrowRight,
  X,
  Check,
  Sparkles,
} from "lucide-react";
import { useState, useRef } from "react";

const services = [
  {
    id: 1,
    title: "Full-Stack Development",
    icon: Code2,
    shortDescription:
      "End-to-end web application development using modern JavaScript technologies. From database to deployment, I build complete solutions that scale.",
    fullDescription:
      "I specialize in building modern, full-stack web applications using React, Next.js, Node.js, and TypeScript. Whether it's a SaaS platform, e-commerce site, or custom business application, I handle everything from database architecture to polished user interfaces.",
    image: "/assets/web-dev.jpg",
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    features: [
      "React & Next.js Applications",
      "Node.js & Express APIs",
      "Database Design (PostgreSQL/MongoDB)",
      "Authentication & Security",
      "Payment Integration",
      "Cloud Deployment (AWS/Vercel)",
    ],
    process: [
      {
        step: "Requirements & Planning",
        desc: "Understanding your business goals and technical needs",
      },
      {
        step: "Architecture Design",
        desc: "Planning scalable system structure",
      },
      {
        step: "Full-Stack Development",
        desc: "Building frontend, backend, and database",
      },
      {
        step: "Testing & QA",
        desc: "Ensuring quality and performance",
      },
      {
        step: "Deployment & Launch",
        desc: "Deploying to production",
      },
      {
        step: "Support & Updates",
        desc: "Ongoing maintenance and improvements",
      },
    ],
  },
  {
    id: 2,
    title: "Mobile Development",
    icon: Smartphone,
    shortDescription:
      "Cross-platform mobile apps using React Native. Build once, deploy to iOS and Android with native performance and user experience.",
    fullDescription:
      "I build cross-platform mobile applications using React Native that deliver native-level performance. Your app will work seamlessly on both iOS and Android, with a single codebase that's easier to maintain and faster to develop.",
    image: "/assets/mobile-dev.jpg",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    features: [
      "iOS & Android Apps",
      "React Native Development",
      "Native Performance",
      "Push Notifications",
      "Offline Functionality",
      "App Store Deployment",
    ],
    process: [
      {
        step: "Planning & Design",
        desc: "Defining features and user experience",
      },
      {
        step: "Mobile Development",
        desc: "Building with React Native",
      },
      {
        step: "API Integration",
        desc: "Connecting to backend services",
      },
      {
        step: "Testing",
        desc: "Device testing and optimization",
      },
      {
        step: "App Store Launch",
        desc: "Publishing to iOS and Android stores",
      },
      {
        step: "Maintenance",
        desc: "Updates and feature additions",
      },
    ],
  },
  {
    id: 3,
    title: "Data Optimization",
    icon: Globe,
    shortDescription:
      "Turning complex raw inputs into reliable, usable systems. I design pipelines that power insights and apply core CS principles for scale, speed, and stability.",
    fullDescription:
      "Beyond handling data, I'm driven by the challenge of building efficient, scalable data systems. I design pipelines, optimize database performance, and implement algorithms that ensure your applications run fast and handle growth seamlessly.",
    image: "/assets/data.jpg",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    features: [
      "Data Structures & Algorithms",
      "DBMS, OOP, OS Fundamentals",
      "Data Pipelines, ETL, and Scalability",
      "Query Optimization",
      "Caching Strategies (Redis)",
      "Performance Tuning",
    ],
    process: [
      {
        step: "System Analysis",
        desc: "Identifying bottlenecks and inefficiencies",
      },
      {
        step: "Architecture Planning",
        desc: "Designing optimized data flow",
      },
      {
        step: "Implementation",
        desc: "Building efficient pipelines and queries",
      },
      {
        step: "Performance Testing",
        desc: "Measuring improvements and benchmarks",
      },
      {
        step: "Optimization",
        desc: "Fine-tuning for maximum efficiency",
      },
      {
        step: "Monitoring",
        desc: "Continuous performance tracking",
      },
    ],
  },
];

export const Services = () => {
  const [selectedService, setSelectedService] = useState<
    (typeof services)[0] | null
  >(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 0.4]);

  return (
    <>
      <section
        ref={containerRef}
        className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-white dark:bg-[#0A0A0A]"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white dark:from-[#0A0A0A] dark:via-[#111111] dark:to-[#0A0A0A]" />
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{ opacity }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,125,251,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(58,99,209,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(47,84,163,0.15),transparent_50%)]" />
          </motion.div>
          <motion.div
            style={{ y: y1 }}
            className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
          />
          <motion.div
            style={{ y: y2 }}
            className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-[#3A63D1]/20 rounded-full blur-[120px]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(76,125,251,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(76,125,251,0.05)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000,transparent)]" />
        </div>

        <div className="relative max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
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
                Premium Services
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
                Crafting Digital
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-[#3A63D1] to-[#2F54A3] bg-clip-text text-transparent">
                Excellence
              </span>
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transforming ideas into powerful digital experiences with
              cutting-edge technology, exceptional design, and unwavering
              commitment to quality.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ServiceCard
                service={services[0]}
                setSelectedService={setSelectedService}
                large
              />
            </motion.div>
            <motion.div
              className="lg:col-span-5 lg:row-span-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ServiceCard
                service={services[1]}
                setSelectedService={setSelectedService}
                tall
              />
            </motion.div>
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <ServiceCard
                service={services[2]}
                setSelectedService={setSelectedService}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0A0A0A] border border-border rounded-3xl shadow-2xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-muted hover:bg-muted/80 border border-border flex items-center justify-center transition-all"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="relative h-80 overflow-hidden rounded-t-3xl">
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0A0A0A] via-white/60 dark:via-[#0A0A0A]/60 to-transparent z-10" />
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-8 left-8 z-20">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${selectedService.gradient} flex items-center justify-center shadow-2xl`}
                    >
                      <selectedService.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-4xl font-black text-foreground">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                  {selectedService.fullDescription}
                </p>
                <div className="mb-10">
                  <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedService.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border hover:bg-muted transition-all"
                      >
                        <div
                          className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br ${selectedService.gradient} flex items-center justify-center`}
                        >
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-medium text-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mb-10">
                  <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                    Development Process
                  </h4>
                  <div className="space-y-4">
                    {selectedService.process.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex gap-5 p-5 rounded-xl bg-muted/50 border border-border hover:bg-muted transition-all group"
                      >
                        <div
                          className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${selectedService.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                        >
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <h5 className="font-bold text-lg mb-1 text-foreground group-hover:text-primary transition-colors">
                            {item.step}
                          </h5>
                          <p className="text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setSelectedService(null);
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`flex-1 px-8 py-4 bg-gradient-to-r ${selectedService.gradient} text-white font-bold rounded-xl hover:shadow-2xl transition-all`}
                  >
                    Get Started
                  </button>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="px-8 py-4 border-2 border-border rounded-xl font-bold hover:bg-muted transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

interface ServiceCardProps {
  service: (typeof services)[0];
  setSelectedService: (service: (typeof services)[0]) => void;
  large?: boolean;
  tall?: boolean;
}

const ServiceCard = ({
  service,
  setSelectedService,
  large,
  tall,
}: ServiceCardProps) => {
  const Icon = service.icon;
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.div
      ref={cardRef}
      className={`group relative h-full ${tall ? "min-h-[600px]" : large ? "min-h-[550px]" : "min-h-[550px]"} rounded-3xl overflow-hidden cursor-pointer bg-white dark:bg-[#0A0A0A] border border-border hover:border-primary/50 transition-all duration-300`}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
      onClick={() => setSelectedService(service)}
    >
      <motion.div
        className={`absolute inset-0 ${tall ? "h-[75%] lg:h-[80%]" : "h-[70%] lg:h-[55%]"}`}
        style={{ y }}
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-30 mix-blend-overlay`}
        />
      </motion.div>

      <motion.div
        className={`absolute ${tall ? "top-[55%] lg:top-[68%]" : "top-[50%] lg:top-[42%]"} left-6 lg:left-8 z-20 w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-2xl`}
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
      >
        <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
      </motion.div>

      <div
        className={`absolute inset-x-0 bottom-0 ${tall ? "h-[38%] lg:h-[28%]" : "h-[43%] lg:h-[50%]"} bg-white dark:bg-[#0A0A0A] backdrop-blur-xl`}
      >
        <div className="h-full flex flex-col justify-end p-5 sm:p-6 lg:p-10 pt-16 lg:pt-12">
          <div>
            <h3 className="text-lg sm:text-xl lg:text-3xl font-black text-foreground mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-[#3A63D1] group-hover:bg-clip-text transition-all duration-300">
              {service.title}
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm lg:text-base leading-relaxed mb-3 sm:mb-4">
              {service.shortDescription}
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              {service.features.slice(0, 3).map((feature, idx) => (
                <span
                  key={idx}
                  className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] sm:text-xs font-semibold"
                >
                  {feature}
                </span>
              ))}
            </div>
            <motion.div
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-primary to-[#3A63D1] text-white font-bold shadow-lg group-hover:shadow-xl transition-all duration-300 text-xs sm:text-sm lg:text-base"
              whileHover={{ x: 5 }}
            >
              <span>Explore Service</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
            </motion.div>
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
