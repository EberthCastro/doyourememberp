import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../components/Home/Home';
// import SingleCard from '../components/CardUnit/SingleCard';
import Contact from '../components/Contact/Contact';
import Aboutus from '../components/AboutUs/Aboutus';
import IdCard from '../components/CardUnit/IdCard';



function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<IdCard />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/aboutus" element={<Aboutus />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default Router
