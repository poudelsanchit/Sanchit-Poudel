import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import NavMenu from './Components/NavMenu';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import BottomNavMenu from './Components/BottomNavMenu';


function App() {

  return (
    <>
      <NavMenu />

      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>

      <BottomNavMenu />


    </>
  )
}

export default App
