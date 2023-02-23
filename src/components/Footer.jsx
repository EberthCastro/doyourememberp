import './footer.css'
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



import Divider from '@mui/material/Divider';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  
  return (

    <div className='footer_e' sx={{ width: 100, height: 50 }}>
        <Divider className='division_e'></Divider>
        <Stack direction="row" className='iconos_e' spacing={4} justifyContent="center">
            <FacebookIcon fontSize="large" />
            <InstagramIcon fontSize="large" />
            <TwitterIcon fontSize="large" />
            <YouTubeIcon fontSize="large" />
        </Stack>

        <Stack direction="row" spacing={5} justifyContent="center" sx={{ mt: 4 }} alignItems="center">
            <p className='letra_e'> Home</p>
            <p className='letra_e'> Privacy Policy </p>
            <p className='letra_e'> Terms of Use </p>
            <p className='letra_e'> Content Policy </p>
            <p className='letra_e'> Code of Ethics </p>
            <p>     </p>
            <p className='letra_e'> © 2023 Do you remember? </p>
        </Stack>
    </div>

  )
  
}

export default Footer