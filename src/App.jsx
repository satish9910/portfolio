import React from 'react';
import './App.css'
import Navbar from './components/NavBar/Navbar'
import HeroSection from './components/HeroSection/HeroSection';
import About from './components/About/About';
import Skill from './components/Skill/Skill';

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  return (
    <div>
    <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
    <HeroSection  isDarkMode={isDarkMode} />
    <About  isDarkMode={isDarkMode}/>
    <Skill/>

    </div>
  )
}

export default App
