import React, { useState, useEffect } from "react";

import axios from "axios";
//Components
// import Navbar from "../../components/navbar/Navbar";



//Router Dom
// import { Link } from "react-router-dom";


import CardR from "../components/CardR";
import { display } from "@mui/system";

const endpoint = 'http://localhost:8000/api'

function Home() {

  const [ dreams, setDreams ] = useState([])
    useEffect ( () => {
        getAllDreams()
    }, [])

    const getAllDreams = async() => {
        const response = await axios.get(`${endpoint}/remembers`)
        setDreams(response.data)
    }

    
    return (
        <>
      
      
      <div >
        {dreams.map((remember) => {
          return <CardR key={remember.id} remember={remember} />;
        })}

        </div>
        
      
    </>
  );
}

export default Home
