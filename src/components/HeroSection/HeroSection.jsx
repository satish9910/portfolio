import React from "react";
import mypic from "../../assets/mypic.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="p-10 flex flex-col items-center md:flex-row md:justify-around">
      <div className="mt-10 md:mt-0 md:order-2">
        <img className="w-80 rounded-lg shadow-lg" src={mypic} alt="Satish" />
      </div>
      <div className="mt-10 md:mt-0 md:w-1/2 md:order-1">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-5">Hi, I'm Satish</h1>
          <p className="text-gray-600">
            Discover the latest stories, articles, and opinions Discover the
            latest stories, articles, and opinions Discover the latest stories,
            articles, and opinions Discover the latest stories, articles, and
            opinions Discover the latest stories, articles, and opinions
            Discover the latest stories, articles, and opinions
          </p>
        </div>
        <div className="mt-5 mb-5">
          <div className="flex items-center gap-3">
            <FaLocationDot />
            <p className="text-gray-600">Gurugram Haryana</p>
          </div>
          <div className="flex items-center gap-3">
            <GoDotFill />
            <p className="text-gray-600">Available for new position</p>
          </div>
        </div>
        <div className="flex gap-3">
          <FaGithub />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
