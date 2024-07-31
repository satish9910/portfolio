import React from "react";
import img from "../../assets/img";


const Skill = () => {
  const logoImg = [
    {
    src:img.react,
    alt: "Skill Icon",
    },
    {
    src:img.tech,
    alt: "Skill Icon",
    },
    {
    src:img.node,
    alt: "Skill Icon",
    },
    {
    src:img.express,
    alt: "Skill Icon",
    },
    {
    src:img.mongodb,
    alt: "Skill Icon",
    },
    {
    src: img.git,
    alt: "Skill Icon",
    },
    {
    src:img.tailwind,
    alt: "Skill Icon",
    },
    {
    src:img.ts,
    alt: "Skill Icon",
    },
  
   
  ];
  return (
    <div className="bg-[#030712] text-center p-5">
      <span className="header">Skills</span>
      <p className="text-white">The skills, tools and technologies I am really good at:</p>
      <div className="flex gap-20 justify-center items-center mt-10 flex-wrap ">
      {
        logoImg.map((img,i)=>(
            <img key={i} src={img.src} alt={img.alt} />
        ))
      }
      </div>
    </div>
  );
};

export default Skill;
