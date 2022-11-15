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
    </ThemeProvider>
  )
}

export default Intro