//import  { useState, useEffect } from 'react';
//import Err from './components/404'
//import Form from  "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import HeroSection from './components/HeroSection';
import Dashboard from './components/Admin/Dashboard.jsx';
import EventDashboard from './components/Admin/EventDashboard.jsx';
import AddNewEvent from './components/Admin/AddNewEvent.jsx';


//import './styles/App.css';
function App() {
/*const [isDarkMode, setIsDarkMode] = useState(false);

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
}, [isDarkMode]);*/


  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/events" element={<EventDashboard />} />
        <Route path="/addevent" element={<AddNewEvent />} />
      </Routes>
    </Router>
  );
}

export default App;
