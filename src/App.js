import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Menu from './pages/Menu/Menu';
import Contact from './pages/Contact/Contact';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import Weather from './pages/WeatherPractice/Weather';
import SignIn from './pages/SignIn/SignIn';
import { ThemeProvider } from './context/ThemeContext';
import { PracticeTheme } from './pages/Practice/PracticeTheme';
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="container">
          <div className="nav-container">
              <Navbar />
          </div>
      
          <div className="introduction-article">
            <Routes>
              <Route path="/" element={<SignIn />}/>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About/>}/>
              <Route path="/menu" element={<Menu/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/practice" element={<PracticeTheme/>}/>
              <Route path="/weather" element={<Weather />}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
