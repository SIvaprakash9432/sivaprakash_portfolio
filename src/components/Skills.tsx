import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Code2, 
  Database, 
  Layers, 
  Wrench,
  Terminal,
  BookOpen
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "JavaScript", "C", "HTML", "CSS"],
    color: "from-primary to-primary/60"
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    skills: ["Django", "REST API", "NumPy", "Pandas", "TensorFlow", "React.js", "Bootstrap"],
    color: "from-secondary to-secondary/60"
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL"],
    color: "from-primary to-secondary"
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "Postman", "Netlify", "Render", "Docker"],
    color: "from-secondary to-primary"
  },
  {
    title: "Development Practices",
    icon: Terminal,
    skills: ["MVT", "ORM", "REST APIs"],
    color: "from-primary/80 to-secondary/80"
  },
  {
    title: "Problem Solving",
    icon: BookOpen,
    skills: ["HackerRank", "GeeksforGeeks", "LeetCode"],
    color: "from-secondary/80 to-primary/80"
  }
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable full-stack applications
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="group"
              >
                <div className="glass-card rounded-2xl p-6 h-full hover:shadow-glow-primary transition-all duration-300 perspective-card">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.15 + skillIndex * 0.05,
                        }}
                        className="px-3 py-1.5 rounded-lg bg-muted/50 text-sm font-medium hover:bg-primary/20 hover:text-primary transition-all duration-200 cursor-default border border-border/50"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
