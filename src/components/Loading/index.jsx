import React from 'react';
import './Loading.css';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';



export default function Loading() {
  return (
    <div className='loadingContainer'>
        <img className='loadingLogo' src='https://i.postimg.cc/VNHnMqLS/logo.png' alt='logo' />
	    <p className='awaitLoadingText'>Por favor, espere un momento...</p>
        <Box className='spinner'>
            <CircularProgress sx={{ color: '#78546a'}} />
        </Box>
    </div>
  )
}