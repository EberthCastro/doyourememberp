import React from "react";

import { Link } from "react-router-dom";
import rememberImg from "../assets/cascade.jfif";

function Card({ remember }) {
  return (
    <>
      <div key={remember.app_id}>
        <Link to={`/${remember.id}`}>
        <img src={rememberImg} alt="descr" />
        </Link>
        <div>
          <h3>
            <b>{remember.remember_name}</b>
          </h3>
          <span>{remember.type}</span>          
          
        </div>
      </div>
    </>
  );
}

export default Card;