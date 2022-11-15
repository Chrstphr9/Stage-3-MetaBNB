import React from 'react'
import Group from '../asset/Group.png';
import {AppBar, Toolbar, IconButton, Stack, Button} from '@mui/material';
import { ThemeProvider, createMuiTheme } from '@mui/material/styles';
import './Intro.css';
import Typography from '@mui/material/typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import image4 from '../asset/image4.png';
import image6 from '../asset/image6.png';
import image3 from '../asset/image3.png';
import image5 from '../asset/image5.png';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Red Rose',
      '"Segoe UI Symbol"',
    ].join(','),

    fontSize: 20,
    fontWeight: 400,
   
    button: {
      textTransform: 'none'
    }
  },

});



const Intro = () => {
  return (
    <ThemeProvider theme={theme}>
    <AppBar position='static' sx={{
        padding: 10,
        marginTop: 2,
        background: 'transparent', 
        boxShadow: 'none',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
    
      }}>
        <Toolbar sx={{
        display: 'flex',
        justifyContent: 'space-between',
    
      }}>
            <IconButton size='large' edge='start' aria-label='logo' style={{marginTop: -10}}>
            <img src={Group} alt="logo" /> 
            </IconButton>


            <Stack direction='row' spacing='2' style={{padding: 3}}>
                <Button sx={{ 
                    color: 'text.primary', paddingRight: 5, paddingLeft: 5}}>Home</Button>
                <Button sx={{ color: 'text.primary', paddingRight: 5, paddingLeft: 5 }}>Place to stay</Button>
                <Button sx={{ color: 'text.primary', paddingRight: 5, paddingLeft: 5 }}>NFTs</Button>
                <Button sx={{ color: 'text.primary', paddingRight: 5, paddingLeft: 5 }}>Community</Button>
            </Stack>

            <Button variant='contained' sx={{
                bgcolor: '#A02279',
                borderRadius: 2
            }}>
                Connect wallet
            </Button>
          
        </Toolbar>
      
    </AppBar>

    <div className='bodycon'>
                <div className='typocon'>
                    <div className='typocon1'>
                        <Typography  variant='h3'>
                        Rent a <b className='txtcol'>place</b> away from <b className='txtcol'>Home</b> in the <b className='txtcol'>Metaverse</b>
                        </Typography> 
                    </div> 
                    
                    <div className='typocon2'>
                        <Typography  variant='h6'>
                        We provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone.
                        </Typography>
                    </div>

                    
                    <div>
                        <ButtonGroup>
                            <TextField variant='outlined'
                            size="small"
                            type='text'
                            label='search for location'
                            color='secondary'
                            sx={{ width: 460,}}/>

<Button variant='contained' size="small" sx={{ bgcolor: '#A02279', paddingLeft: 10, paddingRight: 10, borderRadius: 0.5, marginRight: 15, }}>
                                    Search
                            </Button>


                        </ButtonGroup>

                       
                    </div>
            
                </div>


                <div className='imgcon'>
                <div className='imgcon1'>
                <img src={image4} alt="logo" />
                <img src={image6} alt="logo" />
                </div>

                <div className='imgcon2'>
                <img src={image3} alt="logo" />
                <img src={image5} alt="logo" />
                </div>
                </div>

            </div>
    </ThemeProvider>

    
  )
}

export default Intro