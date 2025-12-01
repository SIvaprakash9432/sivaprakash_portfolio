import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Full Stack Python Developer",
    organization: "VcodeZ Software Solutions",
    location: "Chennai, India",
    duration: "Jun 2025 – Oct 2025",
    description: [
      "Developed full-stack features end-to-end using Django and React.js",
      "Built scalable Django REST APIs for authentication and data processing",
      "Participated in requirement analysis and client communication",
      "Improved backend architecture and implemented comprehensive testing workflows",
      "Collaborated with cross-functional teams in Agile environment"
    ],
    icon: Briefcase,
    color: "from-primary to-primary/60"
  }
];

const education = [
  {
    type: "education",
    title: "Master of Computer Applications (MCA)",
    organization: "Madha Engineering College",
    location: "Chennai, India",
    duration: "2023 – 2025",
    description: ["CCPA: 8.41 / 10.00"],
    icon: GraduationCap,
    color: "from-secondary to-secondary/60"
  },
  {
    type: "education",
    title: "Bachelor of Computer Applications (BCA)",
    organization: "Shanmuga Industries Arts & Science College",
    location: "Tiruvannamalai, India",
    duration: "2020 – 2023",
    description: ["CCPA: 8.64 / 10.00"],
    icon: GraduationCap,
    color: "from-primary/80 to-secondary/80"
  }
];

const Experience = () => {
  const [workRef, workInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [eduRef, eduInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const renderTimelineItem = (item: any, index: number, inView: boolean) => {
    const Icon = item.icon;
    return (
      <motion.div
        key={item.title}
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="relative"
      >
        <div className="glass-card rounded-2xl p-6 hover:shadow-glow-primary transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} shadow-lg flex-shrink-0`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-display font-bold mb-2">{item.title}</h3>
              <p className="text-lg text-primary font-medium mb-2">{item.organization}</p>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {item.duration}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {item.location}
                </span>
              </div>

              <ul className="space-y-2">
                {item.description.map((point: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-foreground/80">
                    <span className="text-primary mt-1.5">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional journey in full-stack development
          </p>
        </motion.div>

        <div ref={workRef} className="max-w-4xl mx-auto space-y-6 mb-20">
          {experiences.map((exp, index) => renderTimelineItem(exp, index, workInView))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic background and qualifications
          </p>
        </motion.div>

        <div ref={eduRef} className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => renderTimelineItem(edu, index, eduInView))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
