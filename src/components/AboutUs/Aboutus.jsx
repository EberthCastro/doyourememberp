import '../../styles/aboutus.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import Stack from '@mui/material/Stack';

import universe from '../../assets/universe.png';
import alesia from '../../assets//alesia.jpg';
import celestina from '../../assets/celestina.jpg';
import eberth from '../../assets/eberth.jpg';
import emma from '../../assets/emma.jpg';
import guillermo from '../../assets/guillermo.jpg';
import jonathan from '../../assets/jonathan.jpg';
import natalia from '../../assets//natalia.jpg';
import zindy from '../../assets/zindy.png';
import rememberLogo from '../../assets/rememberLogo.png';
import Footer from '../Home/Footer';
import Navbar from '../Home/Navbar';


function Aboutus() {
  
  return (

    <div className='aboutus_e'>
      <Navbar/>
      <p className='parrafo_e'>About Us</p>
        <div>
          <section>
            <img src={universe} alt="universo"/>
          </section>
        </div>
      <p className='parrafo1_e'>You live only as long as people keep memories about you.</p>
      <p className='parrafo2_e'>Do you remember? came as an idea to Iryna and Andrew with a mission to help people save their  memories and their entire life for many decades ahead. Big mission is to store data permanently using new technologies like blockchain and decentralization.They knew Andrew's mom was terminally ill, but they wanted to tell their children about her..
        Paradigm-shifting ideas were always hidden in personal losses, extremely challenging life and... strong desire to help people be better.</p>

        <div>
          <section>
            <img src={rememberLogo} alt="our logo"/>
          </section>
        </div>

      <p className='parrafo1_e'>Every single piece of Bank of Memories puzzle is made of a personal story.</p>
      <p className='parrafo2_e'>We are a small team of eight people. Two of us started alone in 2019. Others joined in 2020 and 2021. All of us have a different skillset and backgrounds, but we all have the same family values and we love smart solutions.</p>

      <Stack direction="row" spacing={2}>
        <Card sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={alesia}
              alt="Alesia"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Alesia
              </Typography>
              <Typography variant="body2" className='texto1_e'>
                Alesia comes from Málaga.
              </Typography>
            </CardContent>
          </CardActionArea>
            <CardActions>
              <Button size="small" href='https://www.linkedin.com/in/alesia-baldeon-machuca/'>
              Visit my Linkedin
              </Button>
            </CardActions>
        </Card>

        <Card sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={celestina}
              alt="Celestina"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Celestina
              </Typography>
              <Typography variant="body2" className='texto1_e'>
                Celestina comes from Sevilla.
              </Typography>
            </CardContent>
          </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" href='https://linkedin.com/in/celestina-gomez/'>
              Visit my Linkedin
              </Button>
            </CardActions>
        </Card>

        <Card sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={eberth}
              alt="Eberth"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Eberth
              </Typography>
              <Typography variant="body2" className='texto1_e'>
                Eberth comes from Barcelona.  
              </Typography>
            </CardContent>
          </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" href='https://www.linkedin.com/in/eberth-i-castro/'>
              Visit my Linkedin
              </Button>
            </CardActions>
        </Card>

        <Card sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={emma}
              alt="Emma"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Emma
              </Typography>
              <Typography variant="body2" className='texto1_e'>
                Emma comes from Madrid.
              </Typography>
            </CardContent>
          </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" href='https://www.linkedin.com/in/emma-raquel-rentero-plaza/'>
              Visit my Linkedin
              </Button>
            </CardActions>
        </Card>

        <Card sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={guillermo}
              alt="Guillermo"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Guillermo
              </Typography>
              <Typography variant="body2" className='texto1_e'>
                Guillermo comes from Asturias.
              </Typography>
            </CardContent>
          </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
              Visit my Linkedin
              </Button>
            </CardActions>
        </Card>

        <Card sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={jonathan}
              alt="Jonathan"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Jonathan
              </Typography>
              <Typography variant="body2" className='texto1_e'>
                Jonathan comes from Bilbao.
              </Typography>
            </CardContent>
          </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" href='https://www.linkedin.com/in/jonathan-echeverriaa/'>
              Visit my Linkedin
              </Button>
            </CardActions>
        </Card>

        <Card sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={natalia}
              alt="Natalia"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Natalia
              </Typography>
              <Typography variant="body2" className='texto1_e'>
              Natalia comes from Asturias.
              </Typography>
            </CardContent>
          </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" href='https://www.linkedin.com/in/nataliairlo/'>
              Visit my Linkedin
              </Button>
            </CardActions>
        </Card>

        <Card sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={zindy}
              alt="Zindy"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Zindy
              </Typography>
              <Typography variant="body2" className='texto1_e'>
              Zindy comes from Barcelona.
              </Typography>
            </CardContent>
          </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" href='https://www.linkedin.com/in/zindy-lucio-martinez/'>
              Visit my Linkedin
              </Button>
            </CardActions>
        </Card>
      </Stack>
      <Footer/>
    </div>

  )
}

export default Aboutus