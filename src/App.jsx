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
      title: "PaceWise",
      subtitle: "Running Calculator",
      problem: "Runners constantly need to calculate split times - converting goal finish times to pace per mile, or translating mile pace into track splits for workouts.",
      solution: "Built a running calculator that handles split conversions, age grading, and performance predictions across race distances.",
      impact: "Available on the App Store with paying users.",
      link: "https://pacewise.app",
      linkText: "View Project",
      tags: ["Swift"],
      type: "mobile",
      imageUrl: "/pacewise.png"
    },
    {
      title: "Little Branch Theater",
      subtitle: "Theater Company Website",
      problem: "A new theater company needed an online presence to promote shows and tell their founding story.",
      solution: "Built a full website showcasing their mission, upcoming productions, and company background.",
      impact: "Live at littlebranchtheater.org",
      link: "https://www.littlebranchtheater.org",
      linkText: "Visit Site",
      tags: ["Next.js"],
      type: "desktop",
      imageUrl: "/little-branch-theater.png"
    },
    {
      title: "CTICU Scheduler",
      subtitle: "Medical Scheduling Platform",
      problem: "ICU doctors managed schedules across multiple platforms with poor mobile UI. Weekend/night burden tracking was done by hand. Overtime billing required manual calculation.",
      solution: "Built unified web and mobile apps with seamless syncing, automated tally tracking, and built-in overtime calculations.",
      impact: "Replaced fragmented systems with one platform. Eliminated manual tracking and calculations.",
      link: "https://apps.apple.com/us/app/cticu-schedule/id6747990617",
      linkText: "View on App Store",
      tags: ["React", "React Native", "Node.js", "PostgreSQL"],
      type: "both",
      imageUrl: "/cticu-mobile.png",
      imageUrl2: "/cticu-desktop.png"
    },
    {
      title: "HOA Management System",
      subtitle: "Financial Platform",
      problem: "HOA treasurer tracked everything in spreadsheets - monthly payments, expenses, and generating quarterly reports was tedious and error-prone.",
      solution: "Built a system that streamlines financial tracking, automates report generation, and handles email receipts/invoices to homeowners.",
      impact: "Transformed hours of manual spreadsheet work into automated workflows.",
      tags: ["React", "Node.js", "PostgreSQL"],
      type: "desktop",
      imageUrl: "/hoa.png"
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
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img 
                src="/logo.webp" 
                alt="GZ Logo" 
                className="w-20 h-20 object-contain hover:scale-105 transition-transform"
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
              className="md:hidden p-2"
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
      <section className="min-h-[80vh] flex items-center justify-center px-6 pt-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text Side */}
            <div>
              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                Hey, I'm<br />
                <span className="text-purple-600">Giancarlos</span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700 mb-8 leading-relaxed font-light">
                I build software that solves real problems.
              </p>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Years in project management taught me how to listen to users and understand their pain. Now I actually build the solutions instead of just managing them.
              </p>
              <button 
                onClick={() => scrollToSection('projects')}
                className="group inline-flex items-center gap-3 bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-purple-700 transition-all hover:gap-5"
              >
                See my work
                <ArrowRight size={20} className="transition-all" />
              </button>
            </div>

            {/* Image Side */}
            <div className="relative">
              <div className="relative">
                <img 
                  src="/headshot.jpg" 
                  alt="Giancarlos Zambrano"
                  className="w-full rounded-3xl shadow-2xl"
                />
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-purple-200 rounded-full opacity-50 blur-3xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-300 rounded-full opacity-30 blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-gray-50">
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
      <section id="projects" className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-20">Work</h2>

          <div className="space-y-0">
            {projects.map((project, index) => (
              <div key={index} className={`py-16 md:py-24 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
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
                    
                    <h3 className="text-4xl md:text-5xl font-black mb-3 leading-tight">{project.title}</h3>
                    <p className="text-xl text-purple-600 mb-8 font-bold">{project.subtitle}</p>
                    
                    <div className="space-y-6 text-gray-700">
                      <div>
                        <h4 className="font-black text-sm mb-2 text-gray-900 uppercase tracking-wider">Problem</h4>
                        <p className="text-lg leading-relaxed">{project.problem}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-black text-sm mb-2 text-gray-900 uppercase tracking-wider">Solution</h4>
                        <p className="text-lg leading-relaxed">{project.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-black text-sm mb-2 text-gray-900 uppercase tracking-wider">Impact</h4>
                        <p className="text-lg leading-relaxed">{project.impact}</p>
                      </div>
                    </div>

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
                        <img 
                          src={project.imageUrl} 
                          alt={project.title}
                          className="w-full rounded-3xl shadow-2xl border border-gray-200"
                        />
                      </div>
                    )}
                    
                    {project.type === 'desktop' && (
                      <div className="relative">
                        <img 
                          src={project.imageUrl} 
                          alt={project.title}
                          className="w-full rounded-2xl shadow-2xl border border-gray-200"
                        />
                      </div>
                    )}

                    {project.type === 'both' && (
                      <div className="flex gap-4 items-center">
                        <img 
                          src={project.imageUrl} 
                          alt={`${project.title} mobile`}
                          className="w-1/3 rounded-2xl shadow-xl border border-gray-200"
                        />
                        <img 
                          src={project.imageUrl2} 
                          alt={`${project.title} desktop`}
                          className="w-2/3 rounded-2xl shadow-2xl border border-gray-200"
                        />
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
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-purple-400 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-800 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Let's build<br />something together
          </h2>
          <p className="text-2xl md:text-3xl text-purple-100 mb-12 font-light max-w-3xl mx-auto">
            Got a problem that needs solving? Let's talk.
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
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg font-semibold">© 2025 Giancarlos Zambrano</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;