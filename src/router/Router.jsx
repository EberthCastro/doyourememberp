import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../views/Home';
import SingleCard from '../views/SingleCard';


function Router() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/:id" element={<SingleCard />}></Route>              
            </Routes>
        </BrowserRouter>
  )
}

export default Router
