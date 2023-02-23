
import { Link, useParams } from "react-router-dom";
import CardMedia from '@mui/material/CardMedia';

import rememberImg from "../assets/cascade.jfif";

//
import React, { useState, useEffect } from "react";
import axios from "axios";
const endpoint = "http://127.0.0.1:8000/api";
//

function SingleCard() {

  const [ products, setProducts ] = useState()

  useEffect ( () => {

      getSingleProduct();
  }, [])

  const getSingleProduct = async() => {
      const response = await axios.get(`${endpoint}/remembers/${id}`)
      console.log(response.data)
      setProducts(response.data)
  }

    const { id } = useParams();
    
    // const FindRemember = getSingleProduct.filter((rem) => rem.id === id);
    



  return (
      <>
      <div>
      <CardMedia
        sx={{ height: 200, borderRadius:"5px"}}
        image={rememberImg}
        title="mountain"
        />

      <h1>{products?.title}</h1>
      <h3>{products?.description}</h3>
      </div>

        
    </>
  )
}

export default SingleCard
