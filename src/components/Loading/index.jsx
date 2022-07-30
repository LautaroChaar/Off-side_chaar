import React from 'react';
import './Loading.css';
import { Typography, Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';



export default function Loading() {
  return (
    
    <Box 
    sx={{
      backgroundColor: '#1a1c1c',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px 20px',
      gap: '24px'
    }} className='loadingContainer' >
        <img className='loadingLogo' src='https://i.postimg.cc/VNHnMqLS/logo.png' alt='logo' />
	      <Typography 
        sx={{
          color: '#b7b7b7',
          fontSize: {xs: '1rem', sm: '1.4rem'},
          fontWeight: 'bold'
        }} >Por favor, espere un momento...</Typography>
        <Box className='spinner'>
            <CircularProgress sx={{ color: '#78546a'}} />
        </Box>
    </Box>
  )
}