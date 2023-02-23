

import * as React from 'react';
import { Box, TextField, Typography, CardMedia, Button } from '@mui/material';

export default function Form() {
  return (
    <Box
      component="form"
      sx={{
        display: 'flex', flexDirection: 'column', width: '80%', alignItems: 'center',
        '& .MuiTextField-root': { m: 1 },        
      }}
      md={{width: '80%'}}
      lg={{width: '50%'}}
      bgcolor='#F9B5AC'
      noValidate
      autoComplete="off"
    >
      <Box sx={{
        width: '100%', height: '10%',
        display: 'flex', justifyContent:'space-around',
      }}>
        <Typography variant="h5" component="h5" sx={{ color:'#FFFFFF', alignSelf:'center' }} > MORE INFORMATION </Typography>

      </Box>
      <TextField sx={{ width: '90%', borderRadius:'52px', bgcolor:'#FFFFFF', color:'#656565' }}
        required
        label="Name"
      />
      <TextField sx={{ width: '90%', borderRadius:'52px', bgcolor:'#FFFFFF', color:'#656565' }}
        required
        id="required"
        label="Phone"
      />
      <TextField sx={{ width: '90%', borderRadius:'40px', bgcolor:'#FFFFFF', color:'#656565' }}
        id="outlined-multiline-static"
        label="Message"
        multiline
        rows={4}
      />
      <Button variant="contained" disableElevation sx={{bgcolor:'#FFFFFF', color:'#656565', m:2}}>
        SUBMIT
      </Button>
    </Box>
  );
}