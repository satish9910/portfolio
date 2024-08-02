import React from "react";
import img from "../../assets/img";

const TestiCard = () => {
  return (
    <div className="text-white w-[300px] bg-[#1F2937] p-5 flex flex-col justify-center items-center gap-5 text-justify rounded">
      <img src={img.testiAvtar} />
      <p>
        “Job well done! I am really impressed. He is very very good at what he
        does:) I would recommend Sagar and will rehire in the future for
        Frontend development.”
      </p>
      <h4>John Doe</h4>
      <p>Founder - xyz.com</p>
    </div>
  );
};

export default TestiCard;
