import React from "react";
import Cards from "./Cards";

const Experience = () => {
  const cardData = [
    {
      companyName: "techninza",
      position: "Software Engineer",
      description:
        "I have been working on various projects related to software development, including web development, mobile development, and cloud computing.",
      duration: "May 2022 - Present",
    },
    {
      companyName: "techninza",
      position: "Software Engineer",
      description:
        "I have been working on various projects related to software development, including web development, mobile development, and cloud computing.",
      duration: "May 2022 - Present",
    },
    {
      companyName: "techninza",
      position: "Software Engineer",
      description:
        "I have been working on various projects related to software development, including web development, mobile development, and cloud computing.",
      duration: "May 2022 - Present",
    },
  
  ];
  return (
    <div className="bg-[#111827] md:text-center p-3">
      <p className="header ">Experience</p>
      <p className="text-white">
        Here is a quick summary of my most recent experiences:
      </p>

      {cardData.map((card, i) => (
        <Cards
          key={i}
          companyName={card.companyName}
          position={card.position}
          description={card.description}
          duration={card.duration}
        /> //here we are passing the props to Cards component.
      ))}
    </div>
  );
};

export default Experience;
