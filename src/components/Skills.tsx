import { useEffect, useRef } from 'react';
import { 
  Code2, 
  Database, 
  Server, 
  Smartphone, 
  Globe, 
  GitBranch,
  Terminal,
  Settings
} from 'lucide-react';

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in-scale');
              }, index * 100);
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

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      color: 'primary',
      skills: [
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 80 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Bootstrap', level: 75 }
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'secondary',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Django', level: 85 },
        { name: 'REST APIs', level: 80 },
        { name: 'C', level: 70 }
      ]
    },
    {
      title: 'Database Management',
      icon: Database,
      color: 'success',
      skills: [
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 85 },
        { name: 'ORM', level: 75 }
      ]
    },
    {
      title: 'Development Tools',
      icon: Settings,
      color: 'warning',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'GitHub', level: 90 },
        { name: 'Postman', level: 80 },
        { name: 'PyCharm', level: 75 }
      ]
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
      },
      warning: {
        bg: 'bg-warning/10',
        text: 'text-warning',
        border: 'border-warning/30'
      }
    };
    return colorMap[color as keyof typeof colorMap]?.[type] || '';
  };

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden" ref={sectionRef}>
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-primary mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Comprehensive expertise across the full development stack
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="animate-on-scroll"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="card-professional h-full">
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg mr-4 ${getColorClass(category.color, 'bg')} ${getColorClass(category.color, 'text')}`}>
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className="animate-on-scroll"
                      style={{ animationDelay: `${(categoryIndex * 4 + skillIndex) * 50}ms` }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground-secondary">
                          {skill.name}
                        </span>
                        <span className="text-xs text-foreground-muted">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r transition-all duration-1000 ease-out ${
                            category.color === 'primary' ? 'from-primary to-primary-glow' :
                            category.color === 'secondary' ? 'from-secondary to-secondary-glow' :
                            category.color === 'success' ? 'from-success to-success' :
                            'from-warning to-warning'
                          }`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 4 + skillIndex) * 100}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 animate-on-scroll">
          <div className="card-professional">
            <h3 className="text-2xl font-display font-semibold text-foreground mb-8 text-center">
              Development Practices & Methodologies
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-lg bg-primary/10 text-primary">
                    <Terminal size={32} />
                  </div>
                </div>
                <h4 className="text-lg font-display font-semibold text-foreground mb-2">
                  MVT Architecture
                </h4>
                <p className="text-sm text-foreground-muted">
                  Model-View-Template pattern implementation in Django applications
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-lg bg-secondary/10 text-secondary">
                    <GitBranch size={32} />
                  </div>
                </div>
                <h4 className="text-lg font-display font-semibold text-foreground mb-2">
                  Version Control
                </h4>
                <p className="text-sm text-foreground-muted">
                  Git workflow and collaborative development practices
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-lg bg-success/10 text-success">
                    <Globe size={32} />
                  </div>
                </div>
                <h4 className="text-lg font-display font-semibold text-foreground mb-2">
                  Problem Solving
                </h4>
                <p className="text-sm text-foreground-muted">
                  LeetCode and CodeChef competitive programming experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;