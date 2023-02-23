import React, { useState } from "react";
//Components
// import Navbar from "../../components/navbar/Navbar";


//Datas (Json)
import Remembers from "../data/app.json";
//Router Dom
// import { Link } from "react-router-dom";

import Card from "../components/Card"

function Home() {


    return (
        <>
      
      
      <div >
        {Remembers.map((remember) => {
          return <Card key={remember.num_downloads_exact} remember={remember} />;
        })}

        </div>
        
      
    </>
  );
}

export default Home
