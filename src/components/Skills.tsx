import React from 'react';
import { Code, Database, Globe, Smartphone, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Programming Languages',
      skills: ['hTML','CSS','JAVA','DBMS','PYTHON','SQL'],
      color: 'blue'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Web Development',
      skills: ['React.js', 'Node.js', 'Express.js', 'Next.js', 'Tailwind CSS', 'Bootstrap'],
      color: 'green'
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Database & Backend',
      skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase', 'RESTful APIs', 'GraphQL'],
      color: 'purple'
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Mobile Development',
      skills: ['React Native', 'Flutter', 'Android Studio', 'iOS Development', 'Hybrid Apps'],
      color: 'orange'
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: 'Tools & Technologies',
      skills: ['Git/GitHub', 'Docker', 'VS Code', 'Linux', 'AWS', 'Heroku'],
      color: 'red'
    },
    
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600 border-blue-200',
      green: 'bg-green-50 text-green-600 border-green-200',
      purple: 'bg-purple-50 text-purple-600 border-purple-200',
      orange: 'bg-orange-50 text-orange-600 border-orange-200',
      red: 'bg-red-50 text-red-600 border-red-200',
      pink: 'bg-pink-50 text-pink-600 border-pink-200'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise gained through academic study and practical experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className={`w-16 h-16 rounded-lg ${getColorClasses(category.color)} flex items-center justify-center mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <span className="text-gray-700">{skill}</span>
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r from-${category.color}-400 to-${category.color}-600`}
                        style={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;