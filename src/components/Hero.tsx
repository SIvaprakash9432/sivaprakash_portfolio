import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto mt-16 px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight"
            >
              Hi, I'm <span className="gradient-text">Sivaprakash D</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-2xl text-muted-foreground mb-4 font-medium"
            >
              Python Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-sm sm:text-lg text-muted-foreground mb-4 flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Chennai, India
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-lg text-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Recent graduate and detail-oriented Full Stack Developer skilled in Python, JavaScript, Django, and React.js. 
              Proficient in developing REST APIs and full-stack solutions. Experienced with Agile workflows and enthusiastic 
              about contributing to innovative team projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap items-center justify-center gap-4 mb-12"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="group bg-gradient-primary text-primary-foreground hover:shadow-glow-primary transition-all duration-300"
              >
                View Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300"
              >
                <a href="/Resume_Sivaprakash_D.pdf" download="Sivaprakash_D_Resume.pdf">
                  <Download className="mr-2 w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex items-center justify-center gap-6"
            >
              <a
                href="https://github.com/Siva9943"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="GitHub Profile"
              >
                <div className="p-3 rounded-lg glass-card hover:bg-primary/10 transition-all duration-300 hover:shadow-glow-primary">
                  <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
              </a>
              <a
                href="https://linkedin.com/in/sivaprakash-d-9b5038258"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="LinkedIn Profile"
              >
                <div className="p-3 rounded-lg glass-card hover:bg-primary/10 transition-all duration-300 hover:shadow-glow-primary">
                  <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
              </a>
              <a
                href="mailto:sivaprakash622003@gmail.com"
                className="group"
                aria-label="Email Contact"
              >
                <div className="p-3 rounded-lg glass-card hover:bg-primary/10 transition-all duration-300 hover:shadow-glow-primary">
                  <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
