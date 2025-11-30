import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppButton = () => {
  const whatsappNumber = "2348071943026";
  const message = encodeURIComponent(
    "Hi Eyamah! I'm interested in discussing a project with you."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-40 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 flex items-center justify-center group"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contact on WhatsApp"
    >
      {/* Pulse Animation */}
      <motion.div
        className="absolute inset-0 rounded-full bg-emerald-500"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <FaWhatsapp className="w-7 h-7 sm:w-8 sm:h-8 relative z-10 group-hover:scale-110 transition-transform" />

      {/* Tooltip */}
      <motion.div
        className="absolute left-full ml-3 px-4 py-2 rounded-lg bg-foreground text-background text-sm font-semibold whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        initial={{ x: -10 }}
        whileHover={{ x: 0 }}
      >
        Chat on WhatsApp
        <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-foreground" />
      </motion.div>
    </motion.a>
  );
};
