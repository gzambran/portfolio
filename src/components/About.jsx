const About = () => {
  const bgImageStyle = {
    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.6)), url(/background.webp)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  };

  return (
    <section id="about" className="pt-12 pb-16 md:py-32 px-6 bg-soft-pink" style={bgImageStyle}>
      <div className="max-w-4xl mx-auto">
        <h2 className="font-bold mb-12 leading-tight text-black">
          About
        </h2>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-900 leading-relaxed mb-6 font-normal">
            I build software that solves practical problems — products, tools, and systems that make everyday work smoother and more reliable.
          </p>
          <p className="text-gray-900 leading-relaxed mb-6 font-normal">
            My focus is on clarity and usability: understanding how people actually work, then designing solutions that fit naturally into that flow.
          </p>
          <p className="text-gray-900 leading-relaxed font-normal">
            Based in Brooklyn. Competitive runner, lifelong chess player, and always building something new.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;