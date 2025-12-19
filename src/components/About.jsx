import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="pt-12 pb-16 md:py-32 px-6 bg-soft-pink bg-cover bg-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.6)), url(/background.webp)'
      }}
    >
      <div className="max-w-4xl mx-auto animate-on-scroll">
        <h2 className="font-bold mb-12 leading-tight text-black">
          About
        </h2>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-900 leading-relaxed mb-6 font-normal">
            I've always been drawn to inefficiencies—the manual processes, the spreadsheets held together with prayers, the tools that should exist but don't. My brain is wired to see these friction points and immediately start thinking about solutions.
          </p>
          <p className="text-gray-900 leading-relaxed mb-6 font-normal">
            After years working in tech, I've learned that the hardest part isn't the building—it's understanding the actual problem. I spend time talking to users, watching workflows, finding the real pain points. Then I build fast, test with real people, and iterate based on what actually works.
          </p>
          <p className="text-gray-900 leading-relaxed font-normal">
            Based in Brooklyn. When I'm not building, I'm running competitively or playing chess—both teach you to think several moves ahead and adjust your strategy based on what's actually happening, not what you hoped would happen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;