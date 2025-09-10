import { useEffect, useRef } from 'react';
import { Code2, Database, Globe, Zap } from 'lucide-react';

const About = () => {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-primary mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Passionate about creating innovative solutions and bringing ideas to life through code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
                My Journey as a Developer
              </h3>
              <div className="space-y-4 text-foreground-secondary leading-relaxed">
                <p>
                  I'm a dedicated Full Stack Developer with a passion for creating dynamic, 
                  scalable web applications. My expertise spans across modern technologies 
                  including Python, Django, JavaScript, and React, allowing me to build 
                  comprehensive solutions from concept to deployment.
                </p>
                <p>
                  With a strong foundation in both front-end and back-end development, 
                  I enjoy tackling complex problems and turning innovative ideas into 
                  reality. My experience includes developing REST APIs, working with 
                  various databases, and creating responsive user interfaces.
                </p>
                <p>
                  I'm continuously learning and staying updated with the latest technologies 
                  and best practices in software development. My goal is to contribute to 
                  projects that make a meaningful impact while growing as a professional 
                  in this ever-evolving field.
                </p>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="animate-on-scroll">
              <h4 className="text-xl font-display font-semibold text-foreground mb-4">
                What Drives Me
              </h4>
              <ul className="space-y-3 text-foreground-secondary">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Problem-solving and logical thinking
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Building scalable and maintainable solutions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Continuous learning and growth
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Collaborative development and teamwork
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Stats & Highlights */}
          <div className="space-y-8">
            {/* Professional Focus Areas */}
            <div className="grid grid-cols-2 gap-6">
              <div className="card-professional text-center animate-on-scroll group">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Code2 size={32} />
                  </div>
                </div>
                <h4 className="font-display font-semibold text-foreground mb-2">Frontend</h4>
                <p className="text-sm text-foreground-muted">React, JavaScript, HTML/CSS</p>
              </div>

              <div className="card-professional text-center animate-on-scroll group" style={{ animationDelay: '100ms' }}>
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300">
                    <Database size={32} />
                  </div>
                </div>
                <h4 className="font-display font-semibold text-foreground mb-2">Backend</h4>
                <p className="text-sm text-foreground-muted">Python, Django, REST APIs</p>
              </div>

              <div className="card-professional text-center animate-on-scroll group" style={{ animationDelay: '200ms' }}>
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-lg bg-success/10 text-success group-hover:bg-success group-hover:text-success-foreground transition-all duration-300">
                    <Globe size={32} />
                  </div>
                </div>
                <h4 className="font-display font-semibold text-foreground mb-2">Database</h4>
                <p className="text-sm text-foreground-muted">PostgreSQL, MySQL</p>
              </div>

              <div className="card-professional text-center animate-on-scroll group" style={{ animationDelay: '300ms' }}>
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-lg bg-warning/10 text-warning group-hover:bg-warning group-hover:text-warning-foreground transition-all duration-300">
                    <Zap size={32} />
                  </div>
                </div>
                <h4 className="font-display font-semibold text-foreground mb-2">Tools</h4>
                <p className="text-sm text-foreground-muted">Git, GitHub, Postman</p>
              </div>
            </div>

            {/* Professional Stats */}
            <div className="card-professional animate-on-scroll">
              <h4 className="text-xl font-display font-semibold text-foreground mb-6">
                Professional Goals
              </h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground-secondary">Problem Solving</span>
                    <span className="text-sm text-foreground-muted">Advanced</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '90%' }} />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground-secondary">Full Stack Development</span>
                    <span className="text-sm text-foreground-muted">Proficient</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-secondary h-2 rounded-full" style={{ width: '85%' }} />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground-secondary">Team Collaboration</span>
                    <span className="text-sm text-foreground-muted">Excellent</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '95%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;