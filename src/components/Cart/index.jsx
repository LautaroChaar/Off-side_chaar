import React from 'react';
import { useContext } from "react";
import { cartContext } from "../../Context/CartContext";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import './Cart.css';

export default function Cart() {

  const { cart, removeProduct, clear, totalToPay } = useContext(cartContext);

  let totalCartProducts = cart.length === 0 
  ? 
  <div className='cartContainer'>
    <section className='cartSection'>
      <h1>Carrito</h1>
      <h2 className='h2'>No hay productos agregados al carrito.</h2>
      <Button className='cartSectionButton' color="secondary" ><Link className='cartSectionLink' to= "/">Ir a comprar</Link></Button>
    </section>
  </div> 
  : 
  <div className='cartContainer'>
    <section className='cartSection'>
      <h1>Carrito</h1>
      <table className='table'>
        <thead className='tableRowHead'>
          <tr>
            <th><h2>Cantidad</h2></th>
            <th></th>
            <th className='categoryProduct'><h2>Categoria</h2></th>
            <th><h2>Producto</h2></th>
            <th className='unitPriceProduct'><h2>P/unitario</h2></th>
            <th><h2>P/total</h2></th>
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
    </section>
    <div className='totalPrice'>
      <h3>Total a pagar: $ {totalToPay} </h3>
      <ButtonGroup>
        <Button variant="text" color="secondary" className='cartSectionButton'><Link className='cartSectionLink' to= "/form">FINALIZAR COMPRA</Link></Button>
        <Button variant="text" color="error" className='pp' onClick={() => clear()}><p className='pp'>VACIAR CARRITO</p></Button>
      </ButtonGroup>
    </div>
  </div>

  return (
    <div>
      {totalCartProducts}
    </div>
  )
}
