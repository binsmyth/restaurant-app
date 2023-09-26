import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Menu from './pages/Menu/Menu';
import Contact from './pages/Contact/Contact';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import Practice from './pages/Practice/Practice';
import Weather from './pages/WeatherPractice/Weather';
function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <div className="nav-container">
          <Navbar/>
      </div>
        
      <div className="introduction-article">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/practice" element={<Practice/>}/>
          <Route path="/weather" element={<Weather />}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </div>
      
      
    </BrowserRouter>
  );
}

export default App;
