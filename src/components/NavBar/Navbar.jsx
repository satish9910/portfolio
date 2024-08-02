import React, { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { IoSunnySharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io"; // Importing cross icon

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close the menu after clicking a link
  };

  return (
    <>
      <div className={`${isDarkMode ? "bg-white text-black" : "bg-[#030712] text-white"} flex justify-between items-center p-3`}>
        <div>
          <h3 className="text-2xl">Satish</h3>
        </div>
        <div className="flex items-center gap-5">
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 hover:text-gray-100 cursor-pointer">
            <li onClick={() => scrollToSection('about')}>About</li>
            <li onClick={() => scrollToSection('work')}>Work</li>
            <li onClick={() => scrollToSection('testimonials')}>Testimonials</li>
            <li onClick={() => scrollToSection('contact')}>Contact</li>
          </ul>
          <div className="flex items-center gap-5">
            {isDarkMode ? (
              <MdDarkMode className="text-3xl" onClick={toggleDarkMode} />
            ) : (
              <IoSunnySharp className="text-3xl" onClick={toggleDarkMode} />
            )}
            <a href="./satishResume.pdf" download="resume.pdf">
              <button
                className={` ${isDarkMode ? "bg-[#030712] text-white" : "bg-white text-black"} p-2 rounded-md font-bold text-black hover:cursor-pointer hover:bg-slate-100`}
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
      
        className={`fixed inset-0 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out bg-black text-white p-10 flex flex-col justify-center items-center z-50`}
      >
        <IoMdClose className="text-3xl self-end mb-5 absolute top-8 right-5" onClick={toggleMenu} />
        <ul className="flex flex-col gap-4 text-center hover:text-gray-100 cursor-pointer">
          <li onClick={() => scrollToSection('about')}>About</li>
          <li onClick={() => scrollToSection('work')}>Work</li>
          <li onClick={() => scrollToSection('testimonials')}>Testimonials</li>
          <li onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
