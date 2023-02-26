
import { useParams } from "react-router-dom";
import CardMedia from '@mui/material/CardMedia';
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "../Contact/Form";
import { Stack } from "@mui/material";
import '../../styles/singleCard.css'
const endpoint = "http://127.0.0.1:8000/api";


function SingleCard() {
  const baseUrl = import.meta.env.VITE_IMAGES_URL;

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
      <Box sx={{margin:'10px'}}>
      <CardMedia
        sx={{ height: 500, borderRadius: "5px"}}
        
        image={baseUrl+products?.image}
        title={products?.title}
        
        />
        </Box>
        
      <Stack direction={{ xs: 'column', sm: 'row', md: 'row', lg:'row' }} sx={{margin:'5px'}}>
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
