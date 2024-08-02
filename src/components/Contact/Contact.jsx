import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import { CiLinkedin } from "react-icons/ci";






const Contact = () => {
  return (
    <section id="contact">
    <div className="bg-[#030712] text-white text-center p-5">
      <p className="header">Get in touch</p>
      <p mt-5>
        What’s next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.{" "}
      </p>
      <div>
        <h1 className="flex justify-center items-center gap-2 text-3xl font-bold mt-5">
        <MdOutlineEmail />
        Satish9910@gmail.com
        </h1>
        <h1 className="flex justify-center items-center gap-2 text-3xl font-bold mt-5">
        <BsTelephone />
        +91 8980500565
        </h1>
      </div>
      <p>You may also find me on these platforms!</p>
      <div className="flex justify-center items-center text-2xl mt-5 gap-5">
      <FaGithub />
      <TfiTwitter />
      <CiLinkedin />



      </div>
    </div>
    </section>
  );
};

export default Contact;
