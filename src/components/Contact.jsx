import { useEffect, useRef } from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
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
      id="contact"
      ref={sectionRef}
      className="py-32 px-6 bg-soft-pink relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.6)), url(/background.webp)'
      }}
    >
      <div className="max-w-5xl mx-auto text-center relative z-10 animate-on-scroll">
        <h2 className="font-bold mb-8 leading-tight text-black">
          Let's build<br />something together
        </h2>
        <p className="text-gray-700 mb-12 font-normal max-w-3xl mx-auto">
          Working on something that needs to get built? Have a broken process that's begging for automation? Let's talk.
        </p>
        <a
          href="mailto:Giancarlos.zambrano@gmail.com"
          className="group inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-gray-800 transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-accent focus:ring-offset-2"
        >
          <Mail size={24} className="group-hover:scale-110 transition-transform" />
          Get in touch
        </a>
      </div>
    </section>
  );
};

export default Contact;