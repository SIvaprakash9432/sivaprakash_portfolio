import { useState, useEffect } from 'react';
import { Home, User, Wrench, FolderOpen, Briefcase, GraduationCap, Mail } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Wrench },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-card-border">
      {/* Mobile & Tablet Layout */}
      <div className="block lg:hidden">
        <div className="max-w-md mx-auto px-2 sm:px-4">
          <div className="flex items-center justify-between py-2 sm:py-3">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative flex flex-col items-center justify-center p-2 sm:p-3 rounded-lg transition-all duration-300 group min-w-0 ${
                    activeSection === item.id
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground-muted hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <IconComponent 
                    size={18} 
                    className={`sm:w-5 sm:h-5 transition-all duration-300 ${
                      activeSection === item.id ? 'scale-110' : 'group-hover:scale-105'
                    }`} 
                  />
                  <span className={`text-xs font-medium mt-0.5 sm:mt-1 transition-all duration-300 leading-tight ${
                    activeSection === item.id ? 'opacity-100' : 'opacity-70'
                  }`}>
                    {item.label}
                  </span>
                  {activeSection === item.id && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 sm:w-8 h-0.5 bg-gradient-primary rounded-full animate-fade-in" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center space-x-8 py-4">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                    activeSection === item.id
                      ? 'text-primary bg-primary/10 shadow-lg'
                      : 'text-foreground-muted hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <IconComponent 
                    size={20} 
                    className={`transition-all duration-300 ${
                      activeSection === item.id ? 'scale-110' : 'group-hover:scale-105'
                    }`} 
                  />
                  <span className={`text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'
                  }`}>
                    {item.label}
                  </span>
                  {activeSection === item.id && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-primary rounded-full animate-fade-in" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <main className="pb-16 sm:pb-20 lg:pb-24">
        {children}
      </main>
    </div>
  );
};

export default Layout;