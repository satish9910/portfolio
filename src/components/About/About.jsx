import React from 'react'
import mypic from "../../assets/mypic.jpg"

const About = ({ isDarkMode }) => {
  return (
    <section id='about'>
    <div className={`${isDarkMode ?  "bg-white text-black": "bg-[#111827] text-white"}`} >
    <p className='header'>About</p>
    <div className=" flex flex-col md:flex-row md:justify-around items-center md:p-24 p-10">
    <div>
      <img
        className="w-64 md:w-80 rounded-lg shadow-lg"
        src={mypic}
        alt="Satish"
      />
    </div>
    <div className="md:w-1/2  mt-5">
      <h2 className="text-3xl mb-4 font-bold">Curious about me? Here you have it:</h2>
      <p className='text-justify'>
        Frontend Developer | React Developer | BCA Graduate | MCA Candidate
        Gurugram, India Dedicated and motivated Frontend Developer with a
        strong educational background in Computer Applications. Currently
        pursuing an MCA degree to further enhance skills and knowledge in
        the field. Completed comprehensive training in frontend development
        from Anudeep Foundation, equipped with hands-on experience in HTML5
        ,CSS ,Javascript,Bootstrap5 , React Js . Passionate about creating
        user-friendly interfaces and optimizing user experiences through
        responsive design .
      </p>
    </div>
    </div>
  </div>
  </section>
  )
}

export default About
