import { useState, useEffect } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import Project from './pages/Project';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [darkToggle, setDarkToggle] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const toggleDarkMode = () => {
    setDarkToggle(!darkToggle);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div
        className={`h-full w-full ${
          darkToggle ? 'dark bg-black text-gray-200' : ''
        }`}
      >
        <Nav toggleDarkMode={toggleDarkMode} darkToggle={darkToggle} />
        {isLoading ? (
          // Display loading animation while isLoading is true
          <div className="flex justify-center items-center h-screen">
            <InfinitySpin width="200" color="#4fa94d" />
          </div>
        ) : (
          // Render content when isLoading is false
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
