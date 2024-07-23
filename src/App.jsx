import React from 'react'
import { Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero';
import './App.css'
import Skills from './Components/Skills/Skills';
import Works from './Components/Works/Works';
import ContactMe from './Components/ContactMe/ContactMe';
import Footer from './Components/Footer/Footer';
import AboutMe from './Components/AboutMe/AboutMe';

import { HashRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <HashRouter>
      <Navbar></Navbar>
      <div className="container">
        <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/about' element={<AboutMe />} />
            <Route path='/skill' element={<Skills />} />
            <Route path='/project' element={<Works />} />
            <Route path='/contact' element={<ContactMe />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App
