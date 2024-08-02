import React from 'react';
import './App.css'
import Navbar from './components/NavBar/Navbar'
import HeroSection from './components/HeroSection/HeroSection';
import About from './components/About/About';
import Skill from './components/Skill/Skill';
import Experience from './components/Experience/Experience';
import Work from './components/Work/Work';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  return (
    <div>
    <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
    <HeroSection  isDarkMode={isDarkMode} />
    <About  isDarkMode={isDarkMode}/>
    <Skill isDarkMode={isDarkMode}/>
    <Experience isDarkMode={isDarkMode}/>
    <Work isDarkMode={isDarkMode}/>
    <Testimonials isDarkMode={isDarkMode}/>
    <Contact isDarkMode={isDarkMode}/>

    </div>
  )
}

export default App
