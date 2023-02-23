
import { Link, useParams } from "react-router-dom";
import CardMedia from '@mui/material/CardMedia';

// import rememberImg from "../assets/cascade.jfif";

//
import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "../Contact/Form";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
const endpoint = "http://127.0.0.1:8000/api";
//

function SingleCard() {

  const [products, setProducts] = useState()

  useEffect(() => {

    getSingleProduct();
  }, [])

  const getSingleProduct = async () => {
    const response = await axios.get(`${endpoint}/remembers/${id}`)
    console.log(response.data)
    setProducts(response.data)
  }

  const { id } = useParams();


  return (
    <>
      <CardMedia
        sx={{ height: 200, borderRadius: "5px" }}
        image={products?.image}
        title={products?.title}
      />
      <Stack direction={{ xs: 'column', sm: 'row', md: 'row', lg:'row' }}>
        <Stack padding={2}>
          <h1>{products?.title}</h1>
          <p>{products?.description}</p>
        </Stack>
        <Form />
      </Stack>





    </>
  )
}

export default SingleCard
