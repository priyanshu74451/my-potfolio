import React from 'react';
import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Code2 className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold">Priyanshu Mani Tripathi</span>
          </div>
          
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Recent BCA Graduate passionate about creating innovative digital solutions and contributing to meaningful projects.
          </p>
          
          <div className="flex items-center justify-center space-x-1 text-gray-400 mb-8">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 mx-1" />
            <span>by Priyanshu Mani Tripathi</span>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-gray-400 text-sm">
                © 2024 Priyanshu Mani Tripathi. All rights reserved.
              </p>
              
              <button
                onClick={scrollToTop}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-medium"
              >
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;