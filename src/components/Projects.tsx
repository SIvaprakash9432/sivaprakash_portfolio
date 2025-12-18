import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Calendar, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Agri World Platform",
    duration: "Jul 2025 – Aug 2025",
    tech: ["Django", "OAuth 2.0", "REST API", "JavaScript"],
    description: "Comprehensive agricultural platform connecting farmers with real-time information and community.",
    features: [
      "Google OAuth 2.0 authentication integration",
      "Live weather updates and market rate tracking",
      "Comprehensive crop encyclopedia with best practices",
      "Interactive farmer community forum",
      "Seller dashboard with analytics and admin controls"
    ],
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop",
    github: "#",
    demo: "#"
  },
  {
    title: "Library Management System",
    duration: "Jun 2025",
    tech: ["Django", "HTML/CSS", "SQLite"],
    description: "Full-featured library management solution with role-based access and transaction tracking.",
    features: [
      "Secure role-based authentication system",
      "Book issue and return transaction tracking",
      "Advanced search and filtering capabilities",
      "Admin monitoring tools and analytics",
      "Overdue notification system"
    ],
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&auto=format&fit=crop",
    github: "https://github.com/Siva9943/Library_website.git",
    demo: "https://library-management-c9x5.onrender.com/"
  },
  {
    title: "Government Website Clone (TNPSC-Style)",
    duration: "2025",
    tech: ["HTML", "CSS", "JavaScript"],
    description: "Pixel-perfect responsive clone of government portal interface with modern web standards.",
    features: [
      "Fully responsive interface mimicking TNPSC portal design",
      "Clean menu navigation with dynamic dropdowns",
      "Announcement ticker and services section",
      "Documents area with organized categories",
      "Mobile-optimized collapsible menu system"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
    github: "#",
    demo: "https://siva9943.github.io/Government-site-TNPSC/"
  },
   {
    title: "E-Commerce DataBase Management System",
    duration: "2025",
    tech: ["PostgreSql"],
    description: "Ecommerce database management system with complex queries and relational data handling.",
    features: [
      "design and implementation of relational database schema",
      "complex SQL queries for data retrieval and manipulation",
      "data integrity and normalization techniques",
      "performance optimization strategies",
      "practical experience with real-world ecommerce scenarios"
    ],
    image: "https://library.novasbe.pt/wp-content/uploads/2022/02/Design-sem-nome-2-e1646087319191.png",
    github: "https://github.com/Siva9943/E-commerce-DB.git",
    demo: "#"
  },
  {
    title: "Organ Donation & Matching System + Disease Prediction",
    duration: "Aug 2025 – Oct 2025",
    tech: ["Django", "Machine Learning", "REST API", "Bootstrap"],
    description: "Advanced healthcare platform combining organ donation matching with ML-based disease prediction.",
    features: [
      "Secure admin-verified registration & login system",
      "ML-based donor–patient transplant compatibility prediction",
      "CRUD management for donors, patients, and research teams",
      "Test result uploads and comprehensive reporting",
      "Real-time compatibility scoring algorithm"
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop",
    github: "https://github.com/Siva9943/OrganDonation_Transplant_Matching_System.git",
    demo: "#"
  },
  
  {
    title: "Weather API",
    duration: "2025",
    tech: ["React.js","REST API"],
    description: "Build a weather application that fetches data from a public weather API and displays current weather information based on user input.",
    features: [
      "React based weather app",
      "Fetches data from OpenWeatherMap API",
      "Displays temperature, humidity, wind speed, and weather conditions",
      "User-friendly interface with search functionality",
      "Responsive design for various devices"
    ],
    image: "https://img.freepik.com/free-vector/weather-forecast-mobile-application_1284-59061.jpg",
    github: "https://github.com/Siva9943/weather_application.git",
    demo: "https://weatherapplicationreact01.netlify.app/"
  }

  {
    title: "World-Wide Unemployment Prediction API",
    duration: "2025",
    tech: ["Python", "Flask", "Scikit-Learn", "REST API"],
    description: "Machine learning API service for predicting global unemployment rates with data visualization.",
    features: [
      "Trained ML model with high accuracy prediction",
      "Flask-based RESTful API endpoint",
      "JSON-based request/response handling",
      "CORS-enabled for seamless frontend integration",
      "Data visualizations and preprocessing pipeline"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    github: "https://github.com/Siva9943/world_wide_unemployement_ML_model",
    demo: "#"
  }
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications demonstrating full-stack development expertise
          </p>
        </motion.div>

        <div ref={ref} className="space-y-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass-card rounded-2xl overflow-hidden hover:shadow-glow-primary transition-all duration-500">
                <div className="grid md:grid-cols-5 gap-6 p-6">
                  <div className="md:col-span-2">
                    <div className="relative overflow-hidden rounded-xl aspect-video bg-muted">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                  </div>

                  <div className="md:col-span-3 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex gap-2">
                        {project.github !== "#" && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                            aria-label="View GitHub repository"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        {project.demo !== "#" && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                            aria-label="View live demo"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {project.duration}
                      </span>
                    </div>

                    <p className="text-foreground/80 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20"
                        >
                          <Code className="w-3 h-3 mr-1" />
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="self-start border-primary/50 hover:bg-primary/10 hover:border-primary transition-all"
                        >
                          Read More
                          <ExternalLink className="ml-2 w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-display">{project.title}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full rounded-lg"
                            loading="lazy"
                          />
                          <p className="text-muted-foreground">{project.description}</p>
                          <div>
                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                              <Code className="w-4 h-4 text-primary" />
                              Key Features
                            </h4>
                            <ul className="space-y-2">
                              {project.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <span className="text-primary mt-1.5">•</span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <Badge key={tech} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
