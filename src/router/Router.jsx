import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../components/Home/Home';
import Contact from '../components/Contact/Contact';
import Aboutus from '../components/AboutUs/Aboutus';
import IdCard from '../components/CardUnit/IdCard';
import Create from '../components/CrudRemember/Create';



function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<IdCard />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/aboutus" element={<Aboutus />}></Route>
        <Route path="/create" element={<Create />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default Router
