import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Send, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in-scale');
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sivaprakash622003@gmail.com',
      href: 'mailto:sivaprakash622003@gmail.com',
      description: 'Drop me a line anytime'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9432688537',
      href: 'tel:+919432688537',
      description: 'Available for calls'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tamil Nadu, India',
      href: '#',
      description: 'Open to remote opportunities'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Siva9943/',
      description: 'View my code repositories'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sivaprakash-d-9b5038258',
      description: 'Connect professionally'
    },
    {
      icon: ExternalLink,
      label: 'Portfolio',
      href: 'https://sivaprakash06.netlify.app/',
      description: 'Visit my portfolio website'
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden" ref={sectionRef}>
      {/* Background Effects */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-primary mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project or potential collaboration opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-foreground-secondary leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, innovative projects, or potential collaborations. 
                Whether you have a specific project in mind or just want to connect, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6 animate-on-scroll">
              {contactInfo.map((contact, index) => (
                <div key={contact.label} className="group">
                  <a
                    href={contact.href}
                    className="card-professional flex items-start space-x-4 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <contact.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-display font-semibold text-foreground mb-1">
                        {contact.label}
                      </h4>
                      <p className="text-primary font-medium mb-1">
                        {contact.value}
                      </p>
                      <p className="text-sm text-foreground-muted">
                        {contact.description}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="animate-on-scroll">
              <h4 className="text-lg font-display font-semibold text-foreground mb-6">
                Connect on Social Platforms
              </h4>
              <div className="grid gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-professional flex items-center space-x-4 p-4 transition-all duration-300 hover:border-secondary/30 hover:bg-secondary/5 group"
                  >
                    <div className="p-2 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300">
                      <social.icon size={20} />
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground">{social.label}</h5>
                      <p className="text-sm text-foreground-muted">{social.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll">
            <div className="card-professional">
              <div className="flex items-center mb-6">
                <MessageCircle className="text-primary mr-3" size={24} />
                <h3 className="text-2xl font-display font-semibold text-foreground">
                  Send a Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground-secondary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background-secondary border border-card-border rounded-lg text-foreground placeholder-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground-secondary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background-secondary border border-card-border rounded-lg text-foreground placeholder-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground-secondary mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background-secondary border border-card-border rounded-lg text-foreground placeholder-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground-secondary mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background-secondary border border-card-border rounded-lg text-foreground placeholder-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or how I can help you..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <p className="text-sm text-foreground-muted text-center">
                  <strong className="text-foreground">Quick Response:</strong> I typically respond to messages within 24 hours. 
                  For urgent inquiries, feel free to reach out directly via phone or email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;