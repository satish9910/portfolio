import React from "react";
import img from "../../assets/img";
import { FaExternalLinkAlt } from "react-icons/fa";

const WorkCard = () => {
  const skillData = [
    { skillName: "React" },
    { skillName: "Nextjs" },
    { skillName: "TypeScript" },
    { skillName: "Tailwind CSS" },
    { skillName: "CSS" },
    { skillName: "JavaScript" },
    { skillName: "MongoDB" },
    { skillName: "Node.js" },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-10 text-[#D1D5DB]">
      <div className="bg-[#4B5563] w-full md:w-[40%] md:h-[480px] flex items-center justify-center md:rounded-l-lg p-4">
        <img className="md:w-[480px] md:h-[383px] w-full h-auto" src={img.ss} alt="Project Screenshot" />
      </div>
      <div className="bg-gray-800 w-full md:w-[40%] md:h-[480px] md:rounded-r-lg p-5 flex flex-col justify-around">
        <div>
          <h1 className="mb-5 text-xl font-bold">FiSkills</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
        </div>
        <div className="flex justify-center items-center gap-3 flex-wrap mt-5">
          {skillData.map((skill, i) => (
            <span
              key={i}
              className="rounded-full px-3 py-1 shadow-black bg-gray-600 text-[12px] whitespace-nowrap"
            >
              {skill.skillName}
            </span>
          ))}
        </div>
        <div className="flex justify-start">
          <FaExternalLinkAlt className="text-gray-600 text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
