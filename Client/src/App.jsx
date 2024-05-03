
import Err from './components/404'
import Form from  "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import HeaderSection from './components/HeaderSection';
function App() {
 

  return (
    <>
     <Router>
      <Routes>
        <Route exact path="/" element={<HeroSection />} />
        <Route exact path="/navbar" element={<HeaderSection />} />
        <Route exact path="/Signup" element={<Form />} />
        <Route path='/404' element={<Err />} />
      </Routes>
    </Router>
    </>
  )
}

export default App