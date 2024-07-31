import React from "react";
import img from "../../assets/img";

const Skill = ({ isDarkMode }) => {
  const logoImg = [
    {
      src: img.react,
      alt: "Skill Icon",
    },
    {
      src: img.tech,
      alt: "Skill Icon",
    },
    {
      src: img.node,
      alt: "Skill Icon",
    },
    {
      src: img.express,
      alt: "Skill Icon",
    },
    {
      src: img.mongodb,
      alt: "Skill Icon",
    },
    {
      src: img.git,
      alt: "Skill Icon",
    },
    {
      src: img.tailwind,
      alt: "Skill Icon",
    },
    {
      src: img.ts,
      alt: "Skill Icon",
    },
  ];
  return (
    <div
      className={`${
        isDarkMode ? " bg-white text-black" : " bg-[#030712] text-white "
      }text-center p-5`}
    >
      <p className="header">Skills</p>
      <p className="text-white">
        The skills, tools and technologies I am really good at:
      </p>
      <div className="flex gap-20 justify-center items-center mt-10 flex-wrap shadow-black">
        {logoImg.map((img, i) => (
          <img key={i} src={img.src} alt={img.alt} />
        ))}
      </div>
    </div>
  );
};

export default Skill;
