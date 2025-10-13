import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-gray-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight text-gray-900">
          Let's build<br />something together
        </h2>
        <p className="text-2xl md:text-3xl text-gray-700 mb-12 font-light max-w-3xl mx-auto">
          Have an idea or a problem that needs solving? I'd love to hear about it.
        </p>
        <a 
          href="mailto:Giancarlos.zambrano@gmail.com" 
          className="inline-flex items-center gap-3 bg-purple-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-purple-700 transition-all shadow-xl"
        >
          <Mail size={24} />
          Get in touch
        </a>
      </div>
    </section>
  );
};

export default Contact;