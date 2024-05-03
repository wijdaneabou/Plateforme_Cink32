import  { useState, useEffect } from 'react';
import Err from './components/404'
import Form from  "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import HeaderSection from './components/HeaderSection';
import AboutPage from './components/About.jsx';
import Discover from './components/DiscoverPage.jsx';
import './styles/App.css';
function App() {
const [isDarkMode, setIsDarkMode] = useState(false);

const toggleDarkMode = () => {
  setIsDarkMode(!isDarkMode);
};
useEffect(() => {
  const updateTheme = () => {
    const body = document.querySelector('body');
    if (isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  };
  updateTheme();
}, [isDarkMode]);

  return (
    <>
   
     <Router>
      <Routes>
        <Route exact path="/" element={<HeroSection />} />
        <Route exact path="/navbar" element={<HeaderSection />} />
        <Route exact path="/Signup" element={<Form />} />
        <Route path='/test' element={<Discover />} />
      </Routes>
    </Router>

    </>
  )
}

export default App

