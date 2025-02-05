import React, { useEffect, useState } from 'react';
import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [mode, setMode] = useState('light');
  const [bgColor, setBgColor] = useState('#F7F7F7');
  const [textColor, setTextColor] = useState('#333333');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      // setBgColor('#1a1a1a');
      // setTextColor('#ffffff');
    } else {
      setMode('light');
      // setBgColor('#F7F7F7');
      // setTextColor('#333333');
    }
  };

  useEffect(() => {
    if (mode === 'light') {
      setBgColor('#F7F7F7');
      setTextColor('#333333');
    } else {
      setBgColor('#1a1a1a');
      setTextColor('#ffffff');
    }
  }, [mode])

  return (
    <div style={{ backgroundColor: bgColor, color: textColor, minHeight: '100vh', transition: 'background-color 0.3s ease, color 0.3s ease' }}>
      <Nav mode={mode} toggleMode={toggleMode} />
      <Home mode={mode} bgColor={bgColor} textColor={textColor} />
      <About mode={mode} bgColor={bgColor} textColor={textColor} />
      <Experience mode={mode} bgColor={bgColor} textColor={textColor} />
      <Portfolio mode={mode} bgColor={bgColor} textColor={textColor} />
      <Contact mode={mode} bgColor={bgColor} textColor={textColor} />
      <Footer mode={mode} bgColor={bgColor} textColor={textColor} />
    </div>
  );
}