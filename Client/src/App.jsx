//import  { useState, useEffect } from 'react';
//import Err from './components/404'
//import Form from  "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import HeroSection from './components/HeroSection';
import Dashboard from './components/Admin/components/Dashboard.jsx';
import EventDashboard from './components/Admin/components/EventDashboard.jsx';
import AddNewEvent from './components/Admin/components/AddNewEvent.jsx';
import EventsPage from './components/Events/components/EventsPage.jsx';
import EventDetails from './components/Events/components/EventDetails.jsx';
import ManageAccount from './components/Admin/components/ManageAccount .jsx';
import ChangePassword from './components/Admin/components/ChangePassword.jsx';
import Login from './components/Admin/components/login.jsx';




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
        <Route  path="/ev" element={<EventsPage />} />
        <Route path="/details/:id" element={<EventDetails />} />
        <Route path="/manage-account" element={<ManageAccount />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/Login" element={<Login />}/>
      </Routes>
    </Router>
  );
}

export default App;
