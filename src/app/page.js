'use client'
import HomePage from "@/components/Shared/HomePage";
import { useState } from "react";
import ToggleButton from '../components/Shared/ToggleButton'
const MainPage = () => {
  const [darkMode, setDarkMode] = useState(false); // State to track dark mode

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Toggle dark mode state
  };
  return (
    <div className={`bg-${darkMode ? 'black' : 'white'} text-${darkMode ? 'white' : 'black'} p-10`}>
      <HomePage toggleDarkMode={toggleDarkMode} darkMode={darkMode }/>
  
    </div>
  );
};

export default MainPage;