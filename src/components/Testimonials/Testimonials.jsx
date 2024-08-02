import React from "react";
import TestiCard from "./TestiCard";

const Testimonials = () => {
  return (
    <section id="testimonials">
    <div className="bg-[#111827] text-center p-10">
      <p className="header">Testimonials</p>
      <p className="text-white">
      Nice things people have said about me: </p>
      <div className="flex flex-col md:flex-row justify-center items-center mt-10 gap-10">
      <TestiCard/>
      <TestiCard/>
      <TestiCard/>

      </div>
    </div>
    </section>
  );
};

export default Testimonials;
