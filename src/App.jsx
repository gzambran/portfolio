import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';

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
      subtitle: "Running Calculator - iOS App",
      problem: "Runners constantly need to calculate split times - converting goal finish times to pace per mile, or translating mile pace into track splits (200m, 400m, 800m) for workouts.",
      solution: "Built a running calculator that handles split conversions, age grading, and performance predictions across race distances.",
      impact: "Available on the App Store with paying users.",
      link: "https://apps.apple.com/app/pacewise",
      linkText: "View on App Store",
      tags: ["iOS", "Swift", "Fitness"]
    },
    {
      title: "Little Branch Theater",
      subtitle: "Theater Company Website",
      problem: "A new theater company needed an online presence to promote shows and tell their founding story.",
      solution: "Built a full website showcasing their mission, upcoming productions, and company background.",
      impact: "Live at littlebranchtheater.com",
      link: "https://www.littlebranchtheater.com",
      linkText: "Visit Site",
      tags: ["Web", "React", "Design"]
    },
    {
      title: "CTICU Scheduler",
      subtitle: "Web + iOS Medical Scheduling Platform",
      problem: "ICU doctors managed schedules across multiple platforms with poor mobile UI. Weekend/night burden tracking was done by hand. Overtime billing required manual calculation.",
      solution: "Built unified web and mobile apps with seamless syncing, automated tally tracking, and built-in overtime calculations.",
      impact: "Replaced fragmented systems with one platform. Eliminated manual tracking and calculations.",
      linkText: "Demo Available",
      tags: ["Web", "iOS", "Healthcare", "Full Stack"]
    },
    {
      title: "HOA Management System",
      subtitle: "Financial Management Platform",
      problem: "HOA treasurer tracked everything in spreadsheets - monthly payments, expenses, and generating quarterly reports was tedious and error-prone.",
      solution: "Built a system that streamlines financial tracking, automates report generation, and handles email receipts/invoices to homeowners.",
      impact: "Transformed hours of manual spreadsheet work into automated workflows.",
      linkText: "Private Application",
      tags: ["Web", "Full Stack", "Automation"]
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
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">Portfolio</div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-blue-600 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-blue-600 transition-colors">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2 hover:text-blue-600 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 hover:text-blue-600 transition-colors">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building software that solves real problems
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl">
            I identify pain points, gather requirements, and build custom solutions that eliminate manual work and streamline operations.
          </p>
          <button 
            onClick={() => scrollToSection('projects')}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">About</h2>
          <div className="text-lg text-gray-700 space-y-4 max-w-3xl">
            <p>
              I build custom software solutions for real operational problems. From healthcare scheduling systems to financial management platforms, I focus on eliminating tedious manual work and creating tools that people actually use.
            </p>
            <p>
              My approach combines deep requirement gathering with rapid development, leveraging modern tools and AI to deliver working solutions quickly. I've built web applications, iOS apps, and full-stack platforms that serve real users in production.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Projects</h2>
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.subtitle}</p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-gray-900">Problem</h4>
                    <p className="text-gray-700">{project.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-gray-900">Solution</h4>
                    <p className="text-gray-700">{project.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-gray-900">Impact</h4>
                    <p className="text-gray-700">{project.impact}</p>
                  </div>
                </div>

                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-6 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    {project.linkText}
                    <ExternalLink size={18} className="ml-2" />
                  </a>
                )}
                {!project.link && (
                  <span className="inline-block mt-6 text-gray-500 font-semibold">
                    {project.linkText}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Looking for someone to build custom solutions for your operational challenges? Let's talk.
          </p>
          <div className="flex justify-center gap-6">
            <a 
              href="mailto:your.email@example.com" 
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <Mail size={20} className="mr-2" />
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p>&copy; 2025 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;