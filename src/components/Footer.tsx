import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/Siva9943"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://linkedin.com/in/sivaprakash-d-9b5038258"
    },
    {
      icon: Mail,
      label: "Email",
      link: "mailto:sivaprakash622003@gmail.com"
    }
  ];

  return (
    <footer className="relative border-t border-border/50 py-12">
      <div className="absolute inset-0 bg-gradient-to-t from-card/30 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-display font-bold gradient-text mb-2">
                SIVAPRAKASH.D
              </h3>
              <p className="text-sm text-muted-foreground">
                Python Developer
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg glass-card hover:bg-primary/10 hover:shadow-glow-primary transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </motion.div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm text-muted-foreground flex items-center gap-1"
            >
              <span>© {currentYear} Made with</span>
              <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
              <span>by Sivaprakash D</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
