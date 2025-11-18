import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="pt-12 pb-16 md:pt-32 md:pb-16 border-t border-gray-200">
      <div className="max-w-4xl mx-auto mb-0 md:mb-16 text-center px-6">
        <h3 className="font-semibold leading-relaxed text-black">
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