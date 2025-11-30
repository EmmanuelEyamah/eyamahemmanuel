import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Sparkles, Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechVision Inc",
    company: "TechVision Inc",
    image: "/assets/testimonials/client-1.jpg",
    rating: 5,
    text: "Eyamah transformed our outdated platform into a modern, scalable solution. His technical expertise and attention to detail are exceptional. The project was delivered on time and exceeded our expectations.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager, StartupHub",
    company: "StartupHub",
    image: "/assets/testimonials/client-2.jpg",
    rating: 5,
    text: "Working with Eyamah was a game-changer for our startup. He built our MVP in record time without compromising on quality. His ability to understand our vision and translate it into code is remarkable.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder, EduLearn",
    company: "EduLearn",
    image: "/assets/testimonials/client-3.jpg",
    rating: 5,
    text: "Exceptional developer! Eyamah built our entire learning management system with features we didn't even know we needed. His proactive approach and problem-solving skills are outstanding.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "CTO, FinanceFlow",
    company: "FinanceFlow",
    image: "/assets/testimonials/client-4.jpg",
    rating: 5,
    text: "A true professional. Eyamah delivered a complex financial dashboard with real-time features that our team loves. His code quality and documentation make maintenance a breeze.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "Director, CreativeAgency",
    company: "CreativeAgency",
    image: "/assets/testimonials/client-5.jpg",
    rating: 5,
    text: "Eyamah is not just a developer, he's a strategic partner. He helped us rethink our entire digital strategy and built a platform that has significantly increased our client engagement.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Entrepreneur",
    company: "Wilson Ventures",
    image: "/assets/testimonials/client-6.jpg",
    rating: 5,
    text: "Best investment I've made for my business. Eyamah's work ethic, technical skills, and communication throughout the project were impeccable. Highly recommend!",
    gradient: "from-violet-500 to-purple-500",
  },
];

export const Testimonies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 0.4]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
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
              Client Reviews
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
              What Clients
            </span>{" "}
            <span className="bg-gradient-to-r from-primary via-[#3A63D1] to-[#2F54A3] bg-clip-text text-transparent">
              Say
            </span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Trusted by founders, startups, and established companies worldwide
            to build exceptional digital products.
          </motion.p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <motion.div
          className="relative max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            {/* Main Card */}
            <motion.div
              key={currentIndex}
              className="relative p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-muted/50 to-muted border border-border overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${testimonials[currentIndex].gradient} opacity-5`}
              />

              {/* Quote Icon */}
              <motion.div
                className={`absolute top-8 right-8 w-20 h-20 rounded-2xl bg-gradient-to-br ${testimonials[currentIndex].gradient} opacity-10 flex items-center justify-center`}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Quote className="w-10 h-10 text-primary" />
              </motion.div>

              <div className="relative">
                {/* Rating */}
                <motion.div
                  className="flex gap-1 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                    >
                      <Star className="w-6 h-6 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Testimonial Text */}
                <motion.p
                  className="text-foreground text-xl lg:text-2xl leading-relaxed mb-8 font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  "{testimonials[currentIndex].text}"
                </motion.p>

                {/* Client Info */}
                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${testimonials[currentIndex].gradient} flex items-center justify-center text-white text-2xl font-black shadow-lg`}
                  >
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-sm text-primary font-semibold">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
              <motion.button
                onClick={prevTestimonial}
                className="pointer-events-auto -translate-x-4 lg:-translate-x-8 w-12 h-12 rounded-xl bg-white dark:bg-[#0A0A0A] border-2 border-border hover:border-primary/50 flex items-center justify-center text-foreground hover:text-primary transition-all shadow-lg"
                whileHover={{ scale: 1.1, x: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                onClick={nextTestimonial}
                className="pointer-events-auto translate-x-4 lg:translate-x-8 w-12 h-12 rounded-xl bg-white dark:bg-[#0A0A0A] border-2 border-border hover:border-primary/50 flex items-center justify-center text-foreground hover:text-primary transition-all shadow-lg"
                whileHover={{ scale: 1.1, x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-gradient-to-r from-primary to-[#3A63D1]"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </motion.div>

        {/* All Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-muted/50 to-muted border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => goToTestimonial(index)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div className="relative">
                {/* Rating */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground text-sm leading-relaxed mb-4 line-clamp-4">
                  "{testimonial.text}"
                </p>

                {/* Client */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white text-sm font-bold`}
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-foreground">
                      {testimonial.name}
                    </h5>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {[
            { label: "Happy Clients", value: "50+" },
            { label: "5-Star Reviews", value: "100%" },
            { label: "Projects Delivered", value: "50+" },
            { label: "Repeat Clients", value: "85%" },
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
