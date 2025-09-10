import { useEffect, useRef } from 'react';
import { ExternalLink, Github, Globe, Database, Code, Zap } from 'lucide-react';
import { Button } from './ui/button';

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Farmer Website',
      description: 'A comprehensive web application designed to connect farmers with agricultural resources, market information, and community support. Built with Django framework and REST APIs for seamless data management.',
      longDescription: 'This full-stack web application serves as a digital platform for farmers to access market prices, weather information, agricultural best practices, and community forums. The platform includes user authentication, real-time data updates, and responsive design for mobile accessibility.',
      technologies: ['Django', 'Python', 'REST APIs', 'PostgreSQL', 'HTML/CSS', 'JavaScript'],
      features: [
        'User authentication and profiles',
        'Real-time market price updates',
        'Weather information integration',
        'Community forums and discussions',
        'Resource sharing platform',
        'Mobile-responsive design'
      ],
      demoUrl: '#',
      githubUrl: 'https://github.com/Siva9943/',
      image: '/api/placeholder/600/300',
      status: 'Completed',
      category: 'Full Stack'
    },
    {
      id: 2,
      title: 'Library Management System',
      description: 'A digital library management solution that streamlines book cataloging, member management, and circulation processes. Features include automated tracking, search functionality, and reporting capabilities.',
      longDescription: 'This comprehensive library management system digitizes traditional library operations with features for book inventory management, member registration, borrowing/returning processes, fine calculations, and administrative reporting. Built with a focus on user experience and operational efficiency.',
      technologies: ['Python', 'Django', 'MySQL', 'Bootstrap', 'JavaScript', 'jQuery'],
      features: [
        'Book catalog management',
        'Member registration and profiles',
        'Borrowing and return tracking',
        'Automated fine calculation',
        'Search and filter functionality',
        'Administrative reporting'
      ],
      demoUrl: '#',
      githubUrl: 'https://github.com/Siva9943/',
      image: '/api/placeholder/600/300',
      status: 'Completed',
      category: 'Web Application'
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden" ref={sectionRef}>
      {/* Background Effects */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-primary mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Showcasing innovative solutions and technical expertise through real-world applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`grid lg:grid-cols-2 gap-12 items-center animate-on-scroll ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="card-professional p-0 overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-center">
                      <Code size={48} className="text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-display font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-sm text-foreground-muted mt-2">
                        {project.category}
                      </p>
                    </div>
                  </div>
                  
                  {/* Project Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button variant="hero" size="sm" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <Globe size={16} />
                          Demo
                        </a>
                      </Button>
                      <Button variant="outline-hero" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github size={16} />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                      {project.status}
                    </span>
                    <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-display font-bold text-foreground mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-foreground-secondary leading-relaxed mb-6">
                    {project.longDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-display font-semibold text-foreground mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-card border border-card-border text-sm rounded-md text-foreground-secondary hover:border-primary/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-lg font-display font-semibold text-foreground mb-3">
                    Key Features
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-center text-sm text-foreground-secondary"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button variant="hero" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      View Project
                    </a>
                  </Button>
                  
                  <Button variant="outline-hero" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="card-professional max-w-2xl mx-auto">
            <Zap className="text-primary mx-auto mb-4" size={32} />
            <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
              Interested in My Work?
            </h3>
            <p className="text-foreground-secondary mb-6">
              I'm always open to discussing new opportunities, collaborations, or innovative project ideas.
            </p>
            <Button 
              variant="hero" 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Let's Connect
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;