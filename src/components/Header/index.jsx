import React from 'react'
import Navbar from '../NavBar'
import { Typography } from '@mui/material';
import './Header.css';


export default function Header() {
  
  return (
    <header className="appHeader">
        <Navbar/>
        <Typography variant='h1' sx={{
          color: '#b7b7b7',
          margin: '0',
          padding: '8px',
          backgroundColor: '#282828',
          fontSize: {xs: '1rem', md: '1.4rem'},
          fontWeight: 'bold',
          borderTop: '2px solid #b7b7b7',
          borderBottom: '2px solid #b7b7b7'
        }} >Estamos siempre un paso adelante</Typography>
    </header>
  )
}
