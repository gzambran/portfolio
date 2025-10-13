const About = () => {
  return (
    <section id="about" className="pt-12 pb-16 md:py-32 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black mb-12 leading-tight">
          About
        </h2>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-900 leading-relaxed mb-6">
            I build software that solves practical problems — products, tools, and systems that make everyday work smoother and more reliable.
          </p>
          <p className="text-xl text-gray-900 leading-relaxed mb-6">
            My focus is on clarity and usability: understanding how people actually work, then designing solutions that fit naturally into that flow.
          </p>
          <p className="text-xl text-gray-900 leading-relaxed">
            Based in Brooklyn. Competitive runner, lifelong chess player, and always building something new.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;