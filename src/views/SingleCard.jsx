import React from 'react'
import { Link, useParams } from "react-router-dom";
import Remembers from "../data/app.json";

function SingleCard() {

    const { id } = useParams();
    const FindRemember = Remembers.filter((rem) => rem.id === id);



  return (
      <>
        {FindRemember.map((rem, index) => (
        <div key={index}>
            <h2>{rem.app_name}</h2>
            <div >
                <img src={rem.app_icon} alt="" />
            </div>
        </div>
      
    ))}
    </>
  )
}

export default SingleCard
