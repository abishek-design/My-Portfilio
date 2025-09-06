
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-gray-800 text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8" style={{ perspective: '1000px' }}>
          {PROJECTS.map((project) => (
            <a
              href={project.liveLink || '#'}
              key={project.id}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 border border-gray-100"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="transition-transform duration-500 group-hover:[transform:rotateY(5deg)_rotateX(2deg)]">
                <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-cyan-100 text-cyan-800 text-sm font-medium px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
