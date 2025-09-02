import { useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin, Award, Users, Code } from 'lucide-react';

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-slide-in-left');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      id: 1,
      company: 'VCODEZ',
      position: 'Full Stack Developer Intern',
      duration: 'Internship Program',
      location: 'Remote/On-site',
      type: 'Internship',
      description: 'Gained hands-on experience in full-stack web development, working with modern technologies and contributing to real-world projects. Developed proficiency in both frontend and backend development practices.',
      responsibilities: [
        'Collaborated with senior developers on web application projects',
        'Implemented responsive user interfaces using HTML, CSS, and JavaScript',
        'Developed backend functionality using Python and Django framework',
        'Worked with databases for data management and optimization',
        'Participated in code reviews and agile development processes',
        'Debugged and tested applications to ensure quality deliverables'
      ],
      technologies: ['Python', 'Django', 'JavaScript', 'HTML/CSS', 'Git', 'Database Management'],
      achievements: [
        'Successfully completed assigned development tasks within deadlines',
        'Contributed to team projects and collaborative development',
        'Gained practical experience in software development lifecycle',
        'Enhanced problem-solving and technical communication skills'
      ],
      icon: Code,
      color: 'primary'
    }
  ];

  const skills = [
    {
      category: 'Technical Growth',
      items: [
        'Full Stack Development',
        'Code Quality & Testing',
        'Version Control (Git)',
        'Agile Methodologies'
      ],
      icon: Code,
      color: 'primary'
    },
    {
      category: 'Professional Skills',
      items: [
        'Team Collaboration',
        'Problem Solving',
        'Project Management',
        'Technical Communication'
      ],
      icon: Users,
      color: 'secondary'
    },
    {
      category: 'Industry Knowledge',
      items: [
        'Software Development Lifecycle',
        'Best Practices',
        'Code Documentation',
        'Debugging & Optimization'
      ],
      icon: Briefcase,
      color: 'success'
    }
  ];

  const getColorClass = (color: string, type: 'bg' | 'text' | 'border') => {
    const colorMap = {
      primary: {
        bg: 'bg-primary/10',
        text: 'text-primary',
        border: 'border-primary/30'
      },
      secondary: {
        bg: 'bg-secondary/10',
        text: 'text-secondary',
        border: 'border-secondary/30'
      },
      success: {
        bg: 'bg-success/10',
        text: 'text-success',
        border: 'border-success/30'
      }
    };
    return colorMap[color as keyof typeof colorMap]?.[type] || '';
  };

  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden" ref={sectionRef}>
      {/* Background Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-success/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/2 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-primary mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Building expertise through hands-on development experience and continuous learning
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="animate-on-scroll">
              <div className="card-professional">
                {/* Experience Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                    <div className={`p-3 rounded-lg ${getColorClass(experience.color, 'bg')} ${getColorClass(experience.color, 'text')}`}>
                      <experience.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold text-foreground">
                        {experience.position}
                      </h3>
                      <p className="text-lg text-primary font-semibold">
                        {experience.company}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
                    <div className="flex items-center text-foreground-muted">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">{experience.duration}</span>
                    </div>
                    <div className="flex items-center text-foreground-muted">
                      <MapPin size={16} className="mr-2" />
                      <span className="text-sm">{experience.location}</span>
                    </div>
                    <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full font-medium">
                      {experience.type}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground-secondary leading-relaxed mb-8">
                  {experience.description}
                </p>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center">
                      <Briefcase size={20} className="mr-2 text-primary" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {experience.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start text-sm text-foreground-secondary">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center">
                      <Award size={20} className="mr-2 text-secondary" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-sm text-foreground-secondary">
                          <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-8">
                  <h4 className="text-lg font-display font-semibold text-foreground mb-4">
                    Technologies & Tools Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-card border border-card-border text-sm rounded-md text-foreground-secondary hover:border-primary/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Development */}
        <div className="animate-on-scroll">
          <h3 className="text-3xl font-display font-bold text-center text-foreground mb-12">
            Professional Development
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillCategory, index) => (
              <div 
                key={skillCategory.category}
                className="card-professional animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center mb-6">
                  <div className={`p-4 rounded-lg mx-auto mb-4 w-fit ${getColorClass(skillCategory.color, 'bg')} ${getColorClass(skillCategory.color, 'text')}`}>
                    <skillCategory.icon size={32} />
                  </div>
                  <h4 className="text-xl font-display font-semibold text-foreground">
                    {skillCategory.category}
                  </h4>
                </div>
                
                <ul className="space-y-3">
                  {skillCategory.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      className="flex items-center text-sm text-foreground-secondary"
                    >
                      <div className={`w-2 h-2 rounded-full mr-3 flex-shrink-0 ${
                        skillCategory.color === 'primary' ? 'bg-primary' :
                        skillCategory.color === 'secondary' ? 'bg-secondary' :
                        'bg-success'
                      }`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;