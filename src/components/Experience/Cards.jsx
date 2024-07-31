import React from "react";

const Cards = ({ companyName, position, description, duration }) => {
  return (
    <div className="bg-[#1F2937] text-[#F9FAFB] md:w-[60%] w-[90%]  m-auto mt-10 mb-10 rounded-lg md:flex  md:justify-between p-5  ">
      <h1 className="uppercase">{companyName}</h1>
      <div className="text-start">
        <h2 className="text-2xl font-semibold mb-3">{position}</h2>
        <ul className="list-disc w-[300px] ">
          {description.split("\n").map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <p>{duration}</p>
    </div>
  );
};

export default Cards;
