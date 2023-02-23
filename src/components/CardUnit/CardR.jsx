import React from "react";

import { Link } from "react-router-dom";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import Stack from '@mui/material/Stack';

function CardR({ remember }) {
  return (
    <>
    <div>

      <Card sx={{ maxWidth: 345 , mb: 4, color:"#656565"}} key={remember.id} >
      <Link to={`/${remember.id}`}>
      <CardMedia
        sx={{ height: 200, borderRadius:"5px"}}
        image={remember.image}
        title="mountain"
        /></Link>
      <CardContent sx={{display:"flex", flexDirection:"column", textAlign:"left" }}>
        <Typography gutterBottom variant="h5" component="div">
        {remember.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {remember.description}
        </Typography>
      </CardContent>
      <CardActions >

      <Stack direction="row" spacing={15}>
      <Link to={`/${remember.id}`}>
      <Button startIcon={<AddIcon />} sx={{ display:"flex", justifyContent:"left",backgroundColor: '#f9b5ac', color:"#656565", width:"12em", borderRadius:"20px", padding:"4px 4px 4px 20px",border:"none", "&:hover": {
        border: "0px solid #f9b5ac",
        color: 'black',
        backgroundColor: '#f9b5ac'
     }   }}>
        Info
      </Button>
      </Link>
      

        <FavoriteBorderIcon sx={{"&:hover": {
        border: "0px solid #f9b5ac",
        color: 'black',
        backgroundColor: '#f9b5ac'
     }}}/>
      
      </Stack>
      </CardActions>
    </Card>
        </div>      
    </>
  );
}

export default CardR;