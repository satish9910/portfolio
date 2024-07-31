import React from "react";
import mypic from "../../assets/mypic.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HeroSection = ({ isDarkMode}) => {
  return (
    <>
      <div className={`${isDarkMode ?  "bg-white text-black": "bg-[#030712] text-white"} p-6 md:p-24 flex flex-col items-center md:flex-row md:justify-around`}>
        <div className="w-full md:w-1/2 md:order-2 flex justify-center md:justify-end mt-10 md:mt-0">
          <img
            className="w-64 md:w-80 rounded-lg shadow-lg"
            src={mypic}
            alt="Satish"
          />
        </div>
        <div className="w-full md:w-1/2 md:order-1 mt-10 md:mt-0 flex flex-col items-center md:items-start">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-5 text-center md:text-left">
            Hi, I'm Satish
          </h1>
          <p className="text-gray-600 text-justify md:text-left mb-5">
            Discover the latest stories, articles, and opinions. Stay updated
            with the newest trends and insights in various fields. Join the
            conversation and explore the world of information with me.
          </p>
          <div className="flex flex-col items-center md:items-start gap-3 mb-5">
            <div className="flex items-center gap-2">
              <FaLocationDot className="text-gray-600" />
              <p className="text-gray-600">Gurugram Haryana</p>
            </div>
            <div className="flex items-center gap-2">
              <GoDotFill className="text-gray-600" />
              <p className="text-gray-600">Available for new position</p>
            </div>
          </div>
          <div className="flex gap-5 justify-center md:justify-start">
            <a href="https://github.com/satish9910">
              <FaGithub className="text-2xl text-gray-600 hover:text-black transition duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/satish-pal-ab18b1303/">
              <FaLinkedin className="text-2xl text-gray-600 hover:text-blue-700 transition duration-300" />
            </a>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default HeroSection;
