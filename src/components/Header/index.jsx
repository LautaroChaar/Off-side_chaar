import React from 'react'
import Navbar from '../NavBar'
import './Header.css';


export default function Header() {
  
  return (
    <header className="appHeader">
        <Navbar/>
        <h1 className='slogan' >Estamos siempre un paso adelante</h1>
    </header>
  )
}
