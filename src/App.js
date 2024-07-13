import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import Register from './components/Register';
import TourRegister from './components/TourRegister';
import Contact from './components/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';
import Faq from './components/Faq';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/tourregister" element={<TourRegister/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/faq" element={<Faq/>}/>
      
    </Routes>
    </BrowserRouter>

  );
}

export default App;