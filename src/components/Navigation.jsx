import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ scrollToSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 400);
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all ${
        mobileMenuOpen 
          ? '' 
          : scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm' 
            : ''
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
              <img 
                src="/logo.webp" 
                alt="GZ Logo" 
                className="w-20 h-20 object-contain hover:scale-105 transition-transform"
              />
            </button>
            
            <div className="hidden md:flex items-center gap-12">
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-lg font-semibold text-black hover:text-pink-accent transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="text-lg font-semibold text-black hover:text-pink-accent transition-colors"
              >
                Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu button - outside nav to avoid z-index stacking context issues */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className={`md:hidden p-2 transition-colors fixed top-4 right-6 z-[60] ${
          mobileMenuOpen ? 'text-white' : 'text-black hover:text-pink-accent'
        }`}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black z-50 md:hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen 
            ? 'translate-x-0 opacity-100' 
            : 'translate-x-full opacity-0'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10 px-6">
          <button
            onClick={() => handleNavClick('about')}
            className="text-white text-3xl font-semibold hover:text-pink-accent transition-all transform hover:scale-110"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('projects')}
            className="text-white text-3xl font-semibold hover:text-pink-accent transition-all transform hover:scale-110"
          >
            Work
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="bg-pink-accent text-black px-12 py-5 rounded-full text-2xl font-semibold hover:bg-white transition-all transform hover:scale-105 shadow-lg"
          >
            Contact
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;