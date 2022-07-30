import React from 'react';
import { useContext } from "react";
import { cartContext } from "../../Context/CartContext";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import './Cart.css';
import { Typography, Box } from '@mui/material';

export default function Cart() {

  const { cart, removeProduct, clear, totalToPay } = useContext(cartContext);

  let totalCartProducts = cart.length === 0 
  ? 
  <Box className='cartContainer' sx={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px'
  }}>
    <Box component='section' sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '80%',
      backgroundColor: '#282828',
      padding: '12px',
      borderRadius: '8px'
    }} className='cartSection'>
      <Typography variant='h2' sx={{  fontSize: { xs: '1rem', sm:'1.2rem', md: '1.4rem'},  fontWeight: 'bold', margin: '10px' }} >CARRITO</Typography>
      <Typography variant='h3' sx={{ fontSize: { xs: '1rem', sm:'1.2rem', md: '1.4rem'}, fontWeight: 'bold', margin: '10px' }} >No hay productos agregados al carrito.</Typography>
      <Button color='secondary' className='cartSectionButton' sx={{ width: 'fit-content','&:hover': { backgroundColor: 'transparent'}}} ><Link className='cartSectionLink' to= "/">Ir a comprar</Link></Button>
    </Box>
  </Box> 
  : 
  <Box className='cartContainer' sx={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px'
  }}>
    <Box component='section' sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '80%',
      backgroundColor: '#282828',
      padding: '12px',
      borderRadius: '8px'
    }}>
      <Typography variant='h2' sx={{ fontSize: { xs: '1rem', sm:'1.2rem', md: '1.4rem'}, fontWeight: 'bold', margin: '10px' }} >CARRITO</Typography>
      <table className='table'>
        <thead className='tableRowHead'>
          <tr>
            <th><Typography variant='h3' sx={{ color: '#78546a', fontSize: { xs: '.8rem', md: '1.2rem' }, fontWeight: 'bold'}} >Cantidad</Typography></th>
            <th></th>
            <th className='categoryProduct'><Typography variant='h3' sx={{ color: '#78546a', fontSize: { xs: '.8rem', md: '1.2rem' }, fontWeight: 'bold'}} >Categoria</Typography></th>
            <th><Typography variant='h3' sx={{ color: '#78546a', fontSize: { xs: '.8rem', md: '1.2rem' }, fontWeight: 'bold'}} >Producto</Typography></th>
            <th className='unitPriceProduct'><Typography variant='h3' sx={{ color: '#78546a', fontSize: { xs: '.8rem', md: '1.2rem' }, fontWeight: 'bold'}} >P/unitario</Typography></th>
            <th><Typography variant='h3' sx={{ color: '#78546a', fontSize: { xs: '.8rem', md: '1.2rem' }, fontWeight: 'bold'}} >P/total</Typography></th>
            <th></th>
          </tr>
        </thead>
        {cart.map(product => (
          <tbody key={product.id}>
            <tr className='tableRow'>
              <td>{product.quantity}</td>
              <td><img className='cartImgProducts' src={product.image} alt={product.image}></img></td>
              <td className='categoryProduct'>{product.category}</td>
              <td>{product.title}</td>
              <td className='unitPriceProduct'>${product.price}</td>
              <td>${product.price * product.quantity}</td>
              <td>
                <Button color="error" onClick={() => {
                  removeProduct(product)
                }}><DeleteForeverIcon sx={{ color: "#9f7575" }}></DeleteForeverIcon>
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </Box>
    <Box sx={{ minWidth: '200px', width: { md: '50%' } }} >
      <Typography variant='h4' sx={{ fontSize: {xs: '1rem', sm: '1.2rem', md: '1.5rem' }, fontWeight: 'bold', margin: '10px'}}>Total a pagar : ${totalToPay} </Typography>
      <ButtonGroup>
        <Button variant="text" color="secondary" className='cartSectionButton'><Link className='cartSectionLink' to= "/checkout">FINALIZAR COMPRA</Link></Button>
        <Button variant="text" color='error' onClick={() => clear()}><Typography sx={{fontSize: {xs: '.8rem', sm: '1rem', md: '1.2rem'}, color: '#9f7575', fontWeight: 'bold' }} >VACIAR CARRITO</Typography></Button>
      </ButtonGroup>
    </Box>
  </Box>

  return (
    <Box>
      {totalCartProducts}
    </Box>
  )
}
