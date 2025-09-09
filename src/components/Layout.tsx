import { useState, useEffect } from 'react';
import { Home, User, Wrench, FolderOpen, Mail } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Wrench },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'contact', label: 'Contact', icon: Mail },
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
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg backdrop-saturate-150 border-t border-border/30 shadow-xl">
      {/* Mobile & Tablet Layout */}
      <div className="block lg:hidden">
        <div className="max-w-md mx-auto px-2 sm:px-4">
          <div className="flex items-center justify-between py-1.5 sm:py-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative flex flex-col items-center justify-center px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg transition-all duration-300 group min-w-0 ${
                    activeSection === item.id
                      ? 'text-primary bg-primary/15 scale-105'
                      : 'text-foreground-muted hover:text-primary hover:bg-primary/8'
                  }`}
                >
                  <IconComponent 
                    size={16} 
                    className={`sm:w-4 sm:h-4 transition-all duration-300 ${
                      activeSection === item.id ? 'scale-110' : 'group-hover:scale-105'
                    }`} 
                  />
                  <span className={`text-xs font-medium mt-0.5 transition-all duration-300 leading-tight ${
                    activeSection === item.id ? 'opacity-100 font-semibold' : 'opacity-70'
                  }`}>
                    {item.label}
                  </span>
                  {activeSection === item.id && (
                    <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse" />
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
          <div className="flex items-center justify-center space-x-6 py-2.5">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 group ${
                    activeSection === item.id
                      ? 'text-primary bg-primary/15 shadow-lg scale-105'
                      : 'text-foreground-muted hover:text-primary hover:bg-primary/8'
                  }`}
                >
                  <IconComponent 
                    size={18} 
                    className={`transition-all duration-300 ${
                      activeSection === item.id ? 'scale-110' : 'group-hover:scale-105'
                    }`} 
                  />
                  <span className={`text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id ? 'opacity-100 font-semibold' : 'opacity-80 group-hover:opacity-100'
                  }`}>
                    {item.label}
                  </span>
                  {activeSection === item.id && (
                    <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse" />
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
      <main className="pb-12 sm:pb-14 lg:pb-16">
        {children}
      </main>
    </div>
  );
};

export default Layout;