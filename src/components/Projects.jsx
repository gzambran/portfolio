import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="pt-12 pb-16 md:pt-32 md:pb-32 border-t border-gray-200">
      <div className="max-w-4xl mx-auto mb-0 md:mb-24 text-center px-6">
        <p className="text-2xl md:text-3xl text-gray-900 font-bold leading-relaxed">
          A few things I've designed and built — simple tools that solve real problems.
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="space-y-0">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;