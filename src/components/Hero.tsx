import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Full Stack Developer';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // Create a simple text-based CV for demonstration
    const cvContent = `SIVAPRAKASH D
Full Stack Developer

Contact:
Email: sivaprakash622003@gmail.com
Phone: +91 9432688537
LinkedIn: www.linkedin.com/in/sivaprakash-d-9b5038258
GitHub: https://github.com/Siva9943/
Portfolio: sivaprakash06.netlify.app/

TECHNICAL SKILLS:
Programming: Python, JavaScript, HTML/CSS, PostgreSQL, MySQL, C
Frameworks/Tools: Django, React, Bootstrap, Git, GitHub, Postman, PyCharm
Development Practices: MVT, ORM, REST APIs

OBJECTIVE:
Motivated Full Stack Developer with expertise in Python, Django, REST APIs, JavaScript, and React, focused on building dynamic web applications and scalable solutions.

PROJECTS:
- Farmer Website (Django/REST APIs)
- Library Management System

EXPERIENCE:
Internship at VCODEZ

EDUCATION:
Madha Engineering College
Shanmuga Industries Arts & Science College`;

    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Sivaprakash_D_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30 animate-float" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main Content */}
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            <span className="block text-foreground mb-2">Hi, I'm</span>
            <span className="block text-gradient-primary">SIVAPRAKASH D</span>
          </h1>
          
          <div className="h-12 mb-8">
            <p className="text-2xl md:text-3xl font-display font-medium text-foreground-secondary">
              {displayedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-foreground-muted mb-12 max-w-2xl mx-auto leading-relaxed">
            Motivated Full Stack Developer with expertise in Python, Django, REST APIs, JavaScript, and React, 
            focused on building dynamic web applications and scalable solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              onClick={scrollToAbout}
              className="btn-hero group"
              size="lg"
            >
              Explore My Work
              <ChevronDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
            </Button>
            
            <Button 
              onClick={handleDownloadCV}
              variant="outline"
              className="btn-outline-hero group"
              size="lg"
            >
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6">
            <a
              href="https://github.com/Siva9943/"
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-hover p-3 rounded-full bg-card/50 backdrop-blur-sm border border-card-border text-foreground-secondary hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            
            <a
              href="https://www.linkedin.com/in/sivaprakash-d-9b5038258"
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-hover p-3 rounded-full bg-card/50 backdrop-blur-sm border border-card-border text-foreground-secondary hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            
            <a
              href="mailto:sivaprakash622003@gmail.com"
              className="interactive-hover p-3 rounded-full bg-card/50 backdrop-blur-sm border border-card-border text-foreground-secondary hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              aria-label="Email Contact"
            >
              <Mail size={24} />
            </a>
            
            <a
              href="https://sivaprakash06.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-hover p-3 rounded-full bg-card/50 backdrop-blur-sm border border-card-border text-foreground-secondary hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              aria-label="Portfolio Website"
            >
              <ExternalLink size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-foreground-muted hover:text-primary transition-colors"
            aria-label="Scroll to About Section"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;