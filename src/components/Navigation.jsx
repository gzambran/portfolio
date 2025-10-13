import { useState, useEffect } from 'react';

const Navigation = ({ scrollToSection }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm' 
        : 'bg-transparent'
    }`}>
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
        </div>
      </div>
    </nav>
  );
};

export default Navigation;