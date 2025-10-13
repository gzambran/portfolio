import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <div className={`py-12 md:py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
      <div className={`max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center px-6`}>
        {/* Content Side */}
        <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} order-1`}>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <span key={i} className="px-4 py-2 bg-purple-600 text-white rounded-full text-xs font-bold uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="text-4xl md:text-5xl font-black mb-3 leading-tight">
            {project.comingSoon && (
              <span className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">
                Coming Soon
              </span>
            )}
            {project.title}
          </h3>

          <p className="text-xl text-purple-600 mb-8 font-bold">{project.subtitle}</p>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            {project.description}
          </p>

          {project.link && (
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 mt-8 text-purple-600 text-lg font-bold hover:text-purple-700 transition-all hover:gap-4"
            >
              {project.linkText}
              <ArrowRight size={20} className="transition-all" />
            </a>
          )}
        </div>

        {/* Image Side */}
        <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} order-2`}>
          {project.type === 'mobile' && (
            <div className="relative mx-auto max-w-sm">
              <button 
                onClick={() => window.open(project.imageUrl, '_blank')}
                className="block w-full cursor-pointer"
              >
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full rounded-3xl shadow-2xl border border-gray-200 hover:shadow-3xl transition-shadow"
                />
              </button>
            </div>
          )}
          
          {project.type === 'desktop' && (
            <div className="relative">
              <button 
                onClick={() => window.open(project.imageUrl, '_blank')}
                className="block w-full cursor-pointer"
              >
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full rounded-2xl shadow-2xl border border-gray-200 hover:shadow-3xl transition-shadow"
                />
              </button>
            </div>
          )}

          {project.type === 'both' && (
            <div className="flex gap-4 items-center">
              <button 
                onClick={() => window.open(project.imageUrl, '_blank')}
                className="w-1/3 cursor-pointer"
              >
                <img 
                  src={project.imageUrl} 
                  alt={`${project.title} mobile`}
                  className="w-full rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow"
                />
              </button>
              <button 
                onClick={() => window.open(project.imageUrl2, '_blank')}
                className="w-2/3 cursor-pointer"
              >
                <img 
                  src={project.imageUrl2} 
                  alt={`${project.title} desktop`}
                  className="w-full rounded-2xl shadow-2xl border border-gray-200 hover:shadow-3xl transition-shadow"
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;