import React from 'react';
import { User, MapPin, Linkedin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="w-full bg-gradient-to-br from-white via-blue-50 to-purple-50 py-20 px-6 lg:px-32">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Profile Image with Hover Animation */}
        <div className="relative group">
          <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl transform transition duration-500 group-hover:scale-105 group-hover:shadow-purple-300">
            <img
              src="ec646818-825d-426f-9b70-b6593f03ea51.jpg" 
              alt="Priyanshu Mani Tripathi"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full rounded-3xl bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <p className="text-white text-xl font-semibold animate-fade-in">Hey there, I’m Priyanshu!</p>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6 animate-slide-up">
          <h2 className="text-4xl font-extrabold text-purple-700">About Me</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            I am Priyanshu Mani Tripathi — a passionate web developer, aspiring full-stack engineer, and tech enthusiast who thrives on building beautiful and functional digital experiences.
            I specialize in React, TypeScript, TailwindCSS, and love turning creative ideas into reality.
          </p>
          <p className="text-gray-700 text-lg">
            From learning to leading, my journey is guided by curiosity and dedication. Whether it's building a portfolio, solving real-world problems, or growing through feedback—I’m always evolving.
          </p>

          {/* Personal Info */}
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <User className="text-purple-600 w-5 h-5" />
              <span className="text-gray-800">Name: Priyanshu Mani Tripathi</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-purple-600 w-5 h-5" />
              <span className="text-gray-800">Location: Gorakhpur, India</span>
            </div>
            <div className="flex items-center space-x-3">
              <Linkedin className="text-blue-600 w-5 h-5" />
              <a
                href="https://www.linkedin.com/in/priyanshu-mani-tripathi-697b612b4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;