import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  // Determine background - alternating between light gray and soft pink
  const isEven = index % 2 === 0;
  const bgClass = isEven ? 'bg-gray-50' : 'bg-soft-pink';

  return (
    <div className={`py-12 md:py-24 ${bgClass} rounded-3xl mx-6 mb-6`}>
      <div className={`max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center px-6`}>
        {/* Content Side */}
        <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'} order-1`}>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <span key={i} className="px-4 py-2 bg-black text-white rounded-full text-xs font-semibold uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="font-bold mb-3 leading-tight text-black">
            {project.comingSoon && (
              <span className="block text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">
                Coming Soon
              </span>
            )}
            {project.title}
          </h3>

          <p className="text-gray-700 mb-8 font-medium">{project.subtitle}</p>
          
          <p className="text-gray-700 leading-relaxed font-normal">
            {project.description}
          </p>

          {project.link && (
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 mt-8 text-black text-lg font-semibold hover:text-gray-700 transition-all hover:gap-4"
            >
              {project.linkText}
              <ArrowRight size={20} className="transition-all" />
            </a>
          )}
        </div>

        {/* Image Side */}
        <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'} order-2`}>
          {project.type === 'mobile' && (
            <div className="relative mx-auto max-w-sm">
              <button 
                onClick={() => window.open(project.imageUrl, '_blank')}
                className="block w-full cursor-pointer"
              >
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
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
                  className="w-full rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
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
                  className="w-full rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
                />
              </button>
              <button 
                onClick={() => window.open(project.imageUrl2, '_blank')}
                className="w-2/3 cursor-pointer"
              >
                <img 
                  src={project.imageUrl2} 
                  alt={`${project.title} desktop`}
                  className="w-full rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
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