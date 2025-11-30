import { motion } from "framer-motion";
import { useNavigate } from "@tanstack/react-router";
import { socialLinks } from "@/constants/socialLinks";

const quickLinks = [
  { name: "Home", href: "#hero", type: "scroll" },
  { name: "Services", href: "#services", type: "scroll" },
  { name: "Projects", href: "/projects", type: "link" },
  { name: "Experience", href: "#experience", type: "scroll" },
  { name: "Skills", href: "#skills", type: "scroll" },
  { name: "Blogs", href: "/blogs", type: "link" },
  { name: "Contact", href: "#contact", type: "scroll" },
  { name: "Testimonials", href: "#testimonies", type: "scroll" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleLinkClick = (link: (typeof quickLinks)[0]) => {
    if (link.type === "scroll") {
      const element = document.getElementById(link.href.substring(1));
      if (element) {
        const offset = 70;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      navigate({ to: link.href });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-background to-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  Eyamah
                </span>
                <span className="bg-gradient-to-r from-primary via-primary to-[#3A63D1] bg-clip-text text-transparent">
                  Emmanuel
                </span>
              </h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Expert Full-Stack Developer specializing in React, TypeScript,
                Node.js, and Next.js. Transforming ideas into powerful, scalable
                digital solutions that drive business growth and deliver
                exceptional user experiences.
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-sm font-semibold text-foreground mb-3">
                Quick Links
              </h4>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleLinkClick(link)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-sm font-semibold text-foreground mb-3">
                Connect
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} EyamahEmmanuel. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with <span className="text-primary">♥</span> using React &
              TypeScript
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
