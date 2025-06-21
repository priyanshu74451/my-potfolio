import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Hero = () => {
  return (
    <div id="home" className="relative w-full h-screen flex flex-col items-center justify-center text-center text-black bg-gradient-to-br from-white -400 via-blue-50 to-purple-50">
      <img
        src="ec646818-825d-426f-9b70-b6593f03ea51.jpg" // <-- Replace with your image path
        alt="Profile"
        className="w-40 h-40 rounded-full object-cover border-4 border-white mb-6 animate-float"
      />
      <h1 className="text-4xl md:text-5xl font-bold animate-fadeIn">
        Hi, I’m Priyanshu Mani Tripathi
      </h1>
      <p className="text-lg md:text-xl mt-2 animate-slideUp">
        Frontend Developer | React Enthusiast | Passionate Coder
      </p>

      <div className="flex space-x-6 mt-4 animate-fadeIn">
        <a href="https://linkedin.com/in/priyanshu-mani-tripathi-697b612b4" target="_blank" rel="noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/priyanshu74451" target="_blank" rel="noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="priyanshumani74@gmail.com">
          <HiOutlineMail size={30} />
        </a>
      </div>

      <a
        href="/Priyanshu_Resume.pdf"
        download
        className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-full text-white font-semibold transition animate-slideUp"
      >
        Download CV
      </a>
    </div>
  );
};

export default Hero;