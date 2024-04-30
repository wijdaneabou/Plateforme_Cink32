import  { useState, useEffect } from 'react';
import AboutPage from './components/About.jsx';
import Discover from './components/DiscoverPage.jsx';
//import SignUpPage from './Components/SignUpPage';
import './App.css';

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
      <div className="app-container">
        <div className="toggle-switch" onClick={toggleDarkMode}>
          <input type="checkbox" checked={isDarkMode} readOnly />
          <div className="slider-thumb"></div>
        </div>
        <AboutPage isDarkMode={isDarkMode} />
        <Discover isDarkMode={isDarkMode} />
        {/*<SignUpPage isDarkMode={isDarkMode} />
         */}
    </div>
    </>
  )
}

export default App;
