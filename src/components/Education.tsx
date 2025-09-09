import { useEffect, useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Users } from 'lucide-react';

const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el, index) => {
              const animationType = el.getAttribute('data-animation');
              setTimeout(() => {
                if (animationType) {
                  el.classList.add(animationType);
                } else {
                  el.classList.add('animate-fade-in');
                }
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

  const educationData = [
    {
      id: 1,
      institution: 'Madha Engineering College',
      degree: 'Bachelor of Engineering',
      field: 'Computer Science & Engineering',
      period: '2020 - 2024',
      location: 'Chennai, Tamil Nadu',
      type: 'Engineering',
      description: 'Comprehensive engineering education with focus on computer science fundamentals, software engineering principles, and modern development practices.',
      highlights: [
        'Strong foundation in programming and algorithms',
        'Object-oriented programming and data structures',
        'Database management and system design',
        'Software engineering methodologies'
      ],
      courses: [
        'Data Structures & Algorithms',
        'Object Oriented Programming',
        'Database Management Systems',
        'Software Engineering',
        'Web Technologies',
        'Computer Networks'
      ],
      icon: GraduationCap,
      color: 'primary'
    },
    {
      id: 2,
      institution: 'Shanmuga Industries Arts & Science College',
      degree: 'Higher Secondary Education',
      field: 'Science Stream',
      period: '2018 - 2020',
      location: 'Tamil Nadu',
      type: 'Higher Secondary',
      description: 'Pre-university education with specialization in science subjects, building strong analytical and problem-solving foundation.',
      highlights: [
        'Strong foundation in mathematics and science',
        'Analytical thinking and problem-solving skills',
        'Academic excellence and disciplined study habits',
        'Preparation for engineering entrance examinations'
      ],
      courses: [
        'Advanced Mathematics',
        'Physics',
        'Chemistry',
        'Computer Science Basics',
        'English Literature',
        'Technical Drawing'
      ],
      icon: BookOpen,
      color: 'secondary'
    }
  ];

  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Consistent performance in core computer science subjects',
      icon: Award,
      color: 'primary'
    },
    {
      title: 'Technical Projects',
      description: 'Developed multiple web applications during academic tenure',
      icon: GraduationCap,
      color: 'secondary'
    },
    {
      title: 'Problem Solving',
      description: 'Active participation in coding challenges and competitions',
      icon: BookOpen,
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
    <section id="education" className="py-24 px-4 relative overflow-hidden" ref={sectionRef}>
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll" data-animation="animate-slide-in-bottom">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-primary mb-4">
            Educational Background
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Academic foundation that shaped my technical expertise and problem-solving abilities
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-12 mb-16">
          {educationData.map((education, index) => (
            <div 
              key={education.id} 
              className="animate-on-scroll"
              data-animation={index % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right"}
            >
              <div className="card-professional">
                {/* Education Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                    <div className={`p-3 rounded-lg ${getColorClass(education.color, 'bg')} ${getColorClass(education.color, 'text')}`}>
                      <education.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold text-foreground mb-1">
                        {education.degree}
                      </h3>
                      <p className="text-lg text-primary font-semibold mb-2">
                        {education.institution}
                      </p>
                      <p className="text-foreground-secondary">
                        {education.field}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
                    <div className="flex items-center text-foreground-muted">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">{education.period}</span>
                    </div>
                    <div className="flex items-center text-foreground-muted">
                      <MapPin size={16} className="mr-2" />
                      <span className="text-sm">{education.location}</span>
                    </div>
                    <span className={`px-3 py-1 text-sm rounded-full font-medium ${getColorClass(education.color, 'bg')} ${getColorClass(education.color, 'text')}`}>
                      {education.type}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground-secondary leading-relaxed mb-8">
                  {education.description}
                </p>

                {/* Key Highlights */}
                <div>
                  <h4 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center">
                    <Award size={20} className="mr-2 text-primary" />
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {education.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start text-sm text-foreground-secondary">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Achievements */}
        <div className="animate-on-scroll" data-animation="animate-slide-in-bottom">
          <h3 className="text-3xl font-display font-bold text-center text-foreground mb-12">
            Academic Achievements
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.title}
                className="card-professional text-center animate-on-scroll group"
                data-animation="animate-slide-in-bottom"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">
                  <div className={`p-4 rounded-lg mx-auto mb-4 w-fit transition-all duration-300 ${getColorClass(achievement.color, 'bg')} ${getColorClass(achievement.color, 'text')} group-hover:scale-110`}>
                    <achievement.icon size={32} />
                  </div>
                  <h4 className="text-xl font-display font-semibold text-foreground mb-3">
                    {achievement.title}
                  </h4>
                  <p className="text-foreground-secondary leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 animate-on-scroll" data-animation="animate-slide-in-bottom">
          <div className="card-professional max-w-4xl mx-auto text-center">
            <Users className="text-primary mx-auto mb-6" size={40} />
            <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
              Continuous Learning Philosophy
            </h3>
            <p className="text-foreground-secondary leading-relaxed max-w-2xl mx-auto mb-6">
              My educational journey has instilled a strong foundation in computer science principles 
              and fostered a passion for continuous learning. I believe in staying updated with 
              emerging technologies and applying theoretical knowledge to solve real-world problems.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">4+</div>
                <div className="text-sm text-foreground-muted">Years of Education</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary mb-1">10+</div>
                <div className="text-sm text-foreground-muted">Core CS Subjects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success mb-1">Multiple</div>
                <div className="text-sm text-foreground-muted">Academic Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;