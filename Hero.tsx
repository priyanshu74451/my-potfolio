import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Hero = () => {
  return (
    <div id="home" className="relative w-full h-screen flex flex-col items-center justify-center text-center text-black bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <img
        src="https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCTldMTFFFPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--aff9831e04ab83603cc5ec2b36f51583a641dd84/ec646818-825d-426f-9b70-b6593f03ea51.jpg"
        alt="Profile"
        className="w-40 h-40 rounded-full object-cover border-4 border-white mb-6 animate-float shadow-lg"
      />
      <h1 className="text-4xl md:text-5xl font-bold animate-fadeIn">
        Hi, I'm Priyanshu Mani Tripathi
      </h1>
      <p className="text-lg md:text-xl mt-2 animate-slideUp">
        Frontend Developer | React Enthusiast | Passionate Coder
      </p>

      <div className="flex space-x-6 mt-4 animate-fadeIn">
        <a href="https://linkedin.com/in/priyanshu-mani-tripathi-697b612b4" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/priyanshu74451" target="_blank" rel="noreferrer" className="hover:text-gray-700 transition-colors">
          <FaGithub size={30} />
        </a>
        <a href="mailto:priyanshumani74@gmail.com" className="hover:text-red-600 transition-colors">
          <HiOutlineMail size={30} />
        </a>
      </div>

      <a
        href="/Priyanshu_Resume.pdf"
        download
        className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-full text-white font-semibold transition animate-slideUp shadow-lg"
      >
        Download CV
      </a>
    </div>
  );
};

export default Hero;