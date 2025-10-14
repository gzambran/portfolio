import { Mail } from 'lucide-react';

const Contact = () => {
  const bgImageStyle = {
    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.6)), url(/background.webp)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  };

  return (
    <section id="contact" className="py-32 px-6 bg-soft-pink relative overflow-hidden" style={bgImageStyle}>
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="font-bold mb-8 leading-tight text-black">
          Let's build<br />something together
        </h2>
        <p className="text-gray-700 mb-12 font-normal max-w-3xl mx-auto">
          Have an idea or a problem that needs solving? I'd love to hear about it.
        </p>
        <a 
          href="mailto:Giancarlos.zambrano@gmail.com" 
          className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-gray-800 transition-all shadow-lg"
        >
          <Mail size={24} />
          Get in touch
        </a>
      </div>
    </section>
  );
};

export default Contact;