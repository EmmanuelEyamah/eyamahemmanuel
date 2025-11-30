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
    title: "Web Application Development",
    icon: Globe,
    shortDescription:
      "Transform your business with powerful, scalable web applications that deliver exceptional user experiences and drive real results.",
    fullDescription:
      "I specialize in building modern, enterprise-grade web applications that combine stunning design with robust functionality. Using cutting-edge technologies like React, Next.js, and TypeScript, I create solutions that are fast, secure, and built to scale with your business.",
    image: "/assets/web-dev.jpg",
    gradient: "from-blue-500 via-purple-500 to-pink-500",
    features: [
      "Single Page Applications (SPA)",
      "Progressive Web Apps (PWA)",
      "E-commerce Platforms",
      "Admin Dashboards",
      "Content Management Systems",
      "Real-time Applications",
    ],
    process: [
      {
        step: "Discovery & Planning",
        desc: "Understanding your goals and requirements",
      },
      {
        step: "Design & Prototyping",
        desc: "Creating wireframes and interactive prototypes",
      },
      { step: "Development", desc: "Building with modern tech stack" },
      { step: "Testing & QA", desc: "Rigorous testing for quality assurance" },
      { step: "Deployment", desc: "Launching your application live" },
      {
        step: "Support & Maintenance",
        desc: "Ongoing updates and improvements",
      },
    ],
  },
  {
    id: 2,
    title: "Mobile App Development",
    icon: Smartphone,
    shortDescription:
      "Reach your audience anywhere with beautifully crafted native-quality mobile apps for iOS and Android from a single codebase.",
    fullDescription:
      "I build cross-platform mobile applications using React Native that deliver native-level performance and user experience. Your app will look and feel like it was built specifically for each platform, while you benefit from faster development and easier maintenance.",
    image: "/assets/mobile-dev.jpg",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    features: [
      "iOS & Android Apps",
      "Cross-Platform Development",
      "Native Performance",
      "Push Notifications",
      "Offline Functionality",
      "App Store Deployment",
    ],
    process: [
      {
        step: "Strategy Session",
        desc: "Defining app goals and target audience",
      },
      { step: "UX/UI Design", desc: "Creating intuitive mobile experiences" },
      { step: "Development", desc: "Building with React Native" },
      { step: "Testing", desc: "Device testing and bug fixing" },
      {
        step: "App Store Submission",
        desc: "Publishing to iOS and Android stores",
      },
      {
        step: "Post-Launch Support",
        desc: "Updates, monitoring, and optimization",
      },
    ],
  },
  {
    id: 3,
    title: "Full-Stack Product Development",
    icon: Code2,
    shortDescription:
      "From concept to launch, I build complete digital products with powerful backends, intuitive frontends, and everything in between.",
    fullDescription:
      "I offer end-to-end product development services, handling everything from database architecture to user interface design. Whether you're launching an MVP or building a complex enterprise system, I create scalable solutions with Node.js, PostgreSQL/MongoDB, and modern cloud infrastructure.",
    image: "/assets/fullstack-dev.jpg",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    features: [
      "RESTful & GraphQL APIs",
      "Database Design & Optimization",
      "Authentication & Authorization",
      "Cloud Infrastructure Setup",
      "CI/CD Pipeline",
      "Performance Optimization",
    ],
    process: [
      {
        step: "Requirements Analysis",
        desc: "Deep dive into your business needs",
      },
      {
        step: "Architecture Design",
        desc: "Planning scalable system architecture",
      },
      {
        step: "Backend Development",
        desc: "Building robust APIs and databases",
      },
      {
        step: "Frontend Development",
        desc: "Creating engaging user interfaces",
      },
      {
        step: "Integration & Testing",
        desc: "Connecting all pieces seamlessly",
      },
      { step: "Deployment & Scaling", desc: "Launch and optimize for growth" },
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
      className={`group relative h-full ${tall ? "min-h-[600px]" : large ? "min-h-[500px]" : "min-h-[450px]"} rounded-3xl overflow-hidden cursor-pointer`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
      onClick={() => setSelectedService(service)}
    >
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover scale-110"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 group-hover:from-black/40 group-hover:to-black/40 transition-all duration-500" />
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 group-hover:opacity-30 transition-all duration-500 mix-blend-overlay`}
      />
      <div className="relative h-full flex flex-col justify-between p-8 lg:p-10">
        <motion.div
          className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} items-center justify-center shadow-2xl`}
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>
        <div>
          <h3 className="text-3xl lg:text-4xl font-black text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
            {service.title}
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {service.shortDescription}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {service.features.slice(0, 3).map((feature, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium"
              >
                {feature}
              </span>
            ))}
          </div>
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold group-hover:bg-white group-hover:text-black transition-all duration-300"
            whileHover={{ x: 5 }}
          >
            <span>Explore Service</span>
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </motion.div>
  );
};
