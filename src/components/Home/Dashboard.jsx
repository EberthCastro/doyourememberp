import React, { useState, useEffect } from "react";

import axios from "axios";


import CardR from "../CardUnit/CardR";


const endpoint = 'http://localhost:8000/api'

function Dashboard() {

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

export default Dashboard
