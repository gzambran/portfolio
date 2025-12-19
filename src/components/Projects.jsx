import { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
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
    <section id="projects" ref={sectionRef} className="pt-12 pb-16 md:pt-32 md:pb-16 border-t border-gray-200">
      <div className="max-w-4xl mx-auto mb-0 md:mb-16 text-center px-6">
        <h3 className="font-semibold leading-relaxed text-black animate-on-scroll">
          Things I've built that people actually use.
        </h3>
      </div>

      <div className="max-w-7xl mx-auto mt-8">
        <div>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;