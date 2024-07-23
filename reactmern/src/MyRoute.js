import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";

import React from 'react'

function MyRoute() {
  return (
    <>
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about"  element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>



    </Router>
    
    
    
    </>
  )
}

export default MyRoute