import React from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const Projects = () => {           
 const project = [
    {
      title: 'Weather Forecast Farmer Assistant',
      description: 'A weather forecast application for farmers that integrates Open Weather API for weather reports and Gemini API for an Agriculture Chatbot, providing timely updates and agriculture insights.',
      image: 'https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCT1lLTGdFPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--130b3488cd8b042f1c514ce206764ec34014c0a7/df3a5d32-0afb-4b2e-852d-92721fd62396.jpg',
      technologies: ['React', 'Node.js', 'TypeScript', 'CSS', 'Open Weather API','Gemini API'],
      liveUrl: '#',
      githubUrl: '#',
      date: 'May 2025',
      category: 'Web Development'
    },
   
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my academic and personal projects demonstrating practical application of programming skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.date}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a 
                      href={project.liveUrl}
                      className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                    >
                      <Github className="h-4 w-4" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;