import React from 'react'
import WorkCard from './WorkCard'

const Work = ({isDarkMode}) => {
  return (
    <section id='work'>
    <div className='bg-[#030712] p-10 text-center'>
      <p className="header">Work</p>
      <p className="text-white">
      Some of the noteworthy projects I have built: </p>
      <WorkCard isDarkMode={isDarkMode}/>
      <WorkCard isDarkMode={isDarkMode}/>
      <WorkCard isDarkMode={isDarkMode}/>
      
    </div>
    </section>
  )
}

export default Work
