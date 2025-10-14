import { ArrowRight } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  return (
    <section className="min-h-[60vh] md:min-h-[80vh] flex items-center justify-center px-6 pt-32 pb-16 md:pb-0 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 md:gap-16 items-center">
          {/* Text Side */}
          <div className="order-1">
            <h1 className="font-bold leading-tight mb-6 text-black">
              Hey, I'm<br />
              Giancarlos
            </h1>
            <p className="text-gray-700 leading-relaxed font-normal mb-6 md:mb-8">
              I build software that actually solves problems.
            </p>
            <p className="hidden md:block text-gray-600 mb-10 leading-relaxed font-normal">
              I've learned how to listen closely, understand what people really need, and build solutions they didn't know to ask for. Collaboration and iteration are core to how I build; it's how good ideas become great products.
            </p>
            
            {/* CTA Button - desktop only, under text */}
            <button 
              onClick={() => scrollToSection('projects')}
              className="hidden md:inline-flex group items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all hover:gap-5"
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
                  className="w-full rounded-3xl shadow-lg hover:shadow-xl transition-shadow"
                />
              </button>
            </div>
            
            {/* CTA Button - mobile only, centered under image */}
            <button 
              onClick={() => scrollToSection('projects')}
              className="md:hidden group inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all hover:gap-5 mt-6"
            >
              See my work
              <ArrowRight size={20} className="transition-all" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;