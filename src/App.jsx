import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Mail, ArrowRight, Menu } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "CTICU Scheduler",
      subtitle: "Medical Scheduling Platform",
      description: "Built a modern web + mobile scheduler for an ICU: create/update calendars with time-off visibility, automatic conflict flags, and fair-share tallies. Gives doctors one place to view schedules, request time off, and swap shifts.",
      link: "https://apps.apple.com/us/app/cticu-schedule/id6747990617",
      linkText: "View on App Store",
      tags: ["React", "React Native", "Node.js", "PostgreSQL"],
      type: "both",
      imageUrl: "/cticu-mobile.png",
      imageUrl2: "/cticu-desktop.png"
    },
    {
      title: "Little Branch Theater",
      subtitle: "Theater Company Website",
      description: "Designed and built a clean Next.js site for a new theater company to showcase their mission, productions, and team.",
      link: "https://www.littlebranchtheater.org",
      linkText: "Visit Site",
      tags: ["Next.js"],
      type: "desktop",
      imageUrl: "/little-branch-theater.png"
    },
    {
      title: "HOA Management System",
      subtitle: "Financial Platform",
      description: "Deployed a live web app for an HOA, working with the treasurer to automate payment tracking, quarterly reports, and emailed receipts/invoices.",
      tags: ["React", "Node.js", "PostgreSQL"],
      type: "desktop",
      imageUrl: "/hoa.png"
    },
    {
      title: "PaceWise",
      subtitle: "Running Calculator",
      description: "Core pace/time calculator with interval generation, training zones, performance predictions, and age-grade scoring—built to help runners plan workouts fast.",
      link: "https://pacewise.app",
      linkText: "View Project",
      tags: ["Swift"],
      type: "mobile",
      imageUrl: "/pacewise.png"
    },
    {
      title: "GuardBar",
      subtitle: "macOS Menu Bar App",
      description: "Menu-bar controller for AdGuard Home (inspired by PiBar): quick toggle, status, and service controls—no browser needed.",
      link: "https://github.com/gzambran/GuardBar",
      linkText: "View on GitHub",
      tags: ["Swift", "SwiftUI"],
      type: "desktop",
      imageUrl: "/guardbar.png",
      comingSoon: true
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 ${
        isMenuOpen 
          ? 'bg-purple-600' 
          : scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm' 
            : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img 
                src="/logo.webp" 
                alt="GZ Logo" 
                className={`w-20 h-20 object-contain ${isMenuOpen ? 'opacity-0' : 'opacity-100 hover:scale-105 transition-transform'}`}
              />
            </button>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-12">
              <button onClick={() => scrollToSection('about')} className="text-lg font-semibold hover:text-purple-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-lg font-semibold hover:text-purple-600 transition-colors">Work</button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-purple-600 text-white px-6 py-3 rounded-full font-bold hover:bg-purple-700 transition-all"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className={`md:hidden p-2 ${isMenuOpen ? 'text-white' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={32} strokeWidth={2.5} /> : <Menu size={32} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-purple-600 md:hidden flex items-center justify-center">
          <div className="text-center space-y-8">
            <button onClick={() => scrollToSection('about')} className="block text-white text-4xl font-black hover:scale-110 transition-transform">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="block text-white text-4xl font-black hover:scale-110 transition-transform">
              Work
            </button>
            <button onClick={() => scrollToSection('contact')} className="block text-white text-4xl font-black hover:scale-110 transition-transform">
              Contact
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="min-h-[60vh] md:min-h-[80vh] flex items-center justify-center px-6 pt-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-16 items-center">
            {/* Text Side */}
            <div className="order-1">
              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                Hey, I'm<br />
                <span className="text-purple-600">Giancarlos</span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-light mb-6 md:mb-8">
                I build software that actually solves problems.
              </p>
              <p className="hidden md:block text-xl text-gray-600 mb-10 leading-relaxed">
                I've learned how to listen closely, understand what people really need, and build solutions they didn't know to ask for. Collaboration and iteration are core to how I build; it's how good ideas become great products.
              </p>
              
              {/* CTA Button - desktop only, under text */}
              <button 
                onClick={() => scrollToSection('projects')}
                className="hidden md:inline-flex group items-center gap-3 bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-purple-700 transition-all hover:gap-5"
              >
                See my work
                <ArrowRight size={20} className="transition-all" />
              </button>
            </div>

            {/* Image Side */}
            <div className="relative order-2 flex flex-col items-center md:block">
              <div className="relative w-full">
                <button 
                  onClick={() => window.open('/headshot.jpg', '_blank')}
                  className="block w-full cursor-pointer"
                >
                  <img 
                    src="/headshot.jpg" 
                    alt="Giancarlos Zambrano"
                    className="w-full rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow"
                  />
                </button>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-purple-200 rounded-full opacity-50 blur-3xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-300 rounded-full opacity-30 blur-3xl -z-10"></div>
              </div>
              
              {/* CTA Button - mobile only, centered under image */}
              <button 
                onClick={() => scrollToSection('projects')}
                className="md:hidden group inline-flex items-center gap-3 bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-purple-700 transition-all hover:gap-5 mt-6"
              >
                See my work
                <ArrowRight size={20} className="transition-all" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pt-16 pb-16 md:py-32 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-12 leading-tight">
            About
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              I've spent 15 years in project management, but I started as a developer. The financial crisis pushed me into PM roles early in my career, and I stayed—got the certifications, managed the projects. But I was always most engaged when I could actually build things, not just manage them.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              A few years ago I started coding again and remembered why I got into this. Now I build solutions from start to finish—understanding the problem, gathering requirements, and shipping working software.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              My PM background is an advantage: I know how to talk to users and figure out what actually needs to be built. Then I build it.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Brooklyn-based. Competitive road and track runner. Chess player since I was a kid. I also spend time teaching people how to actually use AI tools.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="pt-12 pb-16 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-12 md:mb-20">Work</h2>

          <div className="space-y-0">
            {projects.map((project, index) => (
              <div key={index} className={`py-12 md:py-24 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <div className={`max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center px-6`}>
                  {/* Content Side */}
                  <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} order-1`}>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-4 py-2 bg-purple-600 text-white rounded-full text-xs font-bold uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-4xl md:text-5xl font-black mb-3 leading-tight">
                      {project.title}
                      {project.comingSoon && (
                        <span className="ml-4 text-2xl md:text-3xl text-purple-600 font-bold">Coming Soon</span>
                      )}
                    </h3>
                    <p className="text-xl text-purple-600 mb-8 font-bold">{project.subtitle}</p>
                    
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                      {project.description}
                    </p>

                    {project.link && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 mt-8 text-purple-600 text-lg font-bold hover:text-purple-700 transition-all hover:gap-4"
                      >
                        {project.linkText}
                        <ArrowRight size={20} className="transition-all" />
                      </a>
                    )}
                  </div>

                  {/* Image Side */}
                  <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} order-2`}>
                    {project.type === 'mobile' && (
                      <div className="relative mx-auto max-w-sm">
                        <button 
                          onClick={() => window.open(project.imageUrl, '_blank')}
                          className="block w-full cursor-pointer"
                        >
                          <img 
                            src={project.imageUrl} 
                            alt={project.title}
                            className="w-full rounded-3xl shadow-2xl border border-gray-200 hover:shadow-3xl transition-shadow"
                          />
                        </button>
                      </div>
                    )}
                    
                    {project.type === 'desktop' && (
                      <div className="relative">
                        <button 
                          onClick={() => window.open(project.imageUrl, '_blank')}
                          className="block w-full cursor-pointer"
                        >
                          <img 
                            src={project.imageUrl} 
                            alt={project.title}
                            className="w-full rounded-2xl shadow-2xl border border-gray-200 hover:shadow-3xl transition-shadow"
                          />
                        </button>
                      </div>
                    )}

                    {project.type === 'both' && (
                      <div className="flex gap-4 items-center">
                        <button 
                          onClick={() => window.open(project.imageUrl, '_blank')}
                          className="w-1/3 cursor-pointer"
                        >
                          <img 
                            src={project.imageUrl} 
                            alt={`${project.title} mobile`}
                            className="w-full rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow"
                          />
                        </button>
                        <button 
                          onClick={() => window.open(project.imageUrl2, '_blank')}
                          className="w-2/3 cursor-pointer"
                        >
                          <img 
                            src={project.imageUrl2} 
                            alt={`${project.title} desktop`}
                            className="w-full rounded-2xl shadow-2xl border border-gray-200 hover:shadow-3xl transition-shadow"
                          />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-purple-600 text-white relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-purple-400 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-800 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Let’s build<br />something together
          </h2>
          <p className="text-2xl md:text-3xl text-purple-100 mb-12 font-light max-w-3xl mx-auto">
            Have an idea or a problem that needs solving? I’d love to hear about it.
          </p>
          <a 
            href="mailto:Giancarlos.zambrano@gmail.com" 
            className="inline-flex items-center gap-3 bg-white text-purple-600 px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition-all shadow-xl"
          >
            <Mail size={24} />
            Get in touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 md:py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg font-semibold">© 2025 Giancarlos Zambrano</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;