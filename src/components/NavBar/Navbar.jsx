import React, { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { IoSunnySharp } from "react-icons/io5";

import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className=" flex justify-between items-center p-3">
        <div>
          <h3 className="text-2xl">Satish</h3>
        </div>
        <div className="flex items-center gap-5">
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 hover:text-gray-100 cursor-pointer">
            <li>About</li>
            <li>Work</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
          <div className="flex items-center gap-5">
            {isDarkMode ? (
              <MdDarkMode className="text-3xl" onClick={toggleDarkMode} />
            ) : (
              <IoSunnySharp className="text-3xl" onClick={toggleDarkMode} />
            )}
            <a href="./satishResume.pdf" download="resume.pdf">
              <button
                className={` ${
                  isDarkMode ? "bg-[#030712] text-white" : "bg-white text-black"
                } p-2 rounded-md font-bold text-black hover:cursor-pointer hover:bg-slate-100`}
              >
                Download CV
              </button>
            </a>
          </div>
          <GiHamburgerMenu
            onClick={toggleMenu}
            className="text-2xl md:hidden"
          />
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-black text-white p-10 rounded-sm text-center`}
      >
        <ul className="flex flex-col gap-4 mt-3 hover:text-gray-100 cursor-pointer">
          <li>About</li>
          <li>Work</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
