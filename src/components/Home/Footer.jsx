import '../../styles/footer.css'
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
            <a href='https://www.facebook.com/GlobalBankofMemories'><FacebookIcon fontSize="large" /></a>
            <a href='https://www.instagram.com/bank_of_memories_official/'><InstagramIcon fontSize="large" /></a>
            <a href='https://twitter.com/bankof_memories'><TwitterIcon fontSize="large" /></a>
            <a href='https://www.youtube.com/watch?v=0IwfBZ2PtzA&t=1s'><YouTubeIcon fontSize="large" /></a>
        </Stack>

        <Stack direction="row" spacing={5} justifyContent="center" sx={{ mt: 4, flexWrap: 'wrap' }} alignItems="center" >
            <a className='letra_e'href="#"> Privacy Policy </a>
            <a className='letra_e'href="#"> Terms of Use </a>
            <a className='letra_e'href="#"> Content Policy </a>
            <a className='letra_e'href="https://decentraland.org/ethics"> Code of Ethics </a>
        </Stack>

        <Stack direction="row" spacing={5} justifyContent="center" sx={{ mt: 4, flexWrap: 'wrap' }} alignItems="center" >
            <p className='letra_e'> © 2023 Do you remember? </p>
        </Stack>
    </div>

  )
  
}

export default Footer