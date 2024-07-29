import React from 'react';
import './App.css'
import Navbar from './components/NavBar/Navbar'
import HeroSection from './components/HeroSection/HeroSection';

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  return (
    <div className={`${isDarkMode ?  "bg-white text-black": "bg-[#030712] text-white"}`}>
    <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
    <HeroSection />
      
    </div>
  )
}

export default App
