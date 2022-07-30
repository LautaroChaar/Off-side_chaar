import React from "react";
import { cartContext } from "../../Context/CartContext";
import { useContext } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import Button from "@mui/material/Button";
import Swal from 'sweetalert2';
import "./CheckoutForm.css";
import FormInput from "../FormInput";
 
export default function CheckoutForm() {

  const { cart, totalToPay, clear } = useContext(cartContext);
  const [buyerName, setBuyerName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");

  function handleClickOrder() {
    const order = {
      buyer: { buyerName, phoneNumber, email },
      cart,
      price: totalToPay,
    };
    const db = getFirestore();
    const ordersRef = collection(db, "orders");
    addDoc(ordersRef, order);
    clear();
  }
 
  const validateFormConditions = buyerName !== "" && phoneNumber !== "" && email !== "" && cart.length >= 1;

  const validateForm = () => {
    if (validateFormConditions) {
      handleClickOrder();
      Swal.fire({
        icon:'success',
        title: 'Listo',
        text: `Su pedido ha sido realizado con exito!`,
        background: '#111111',
        color: '#b7b7b7',
        confirmButtonColor: '#4e4e4e',
        confirmButtonText: 'Cerrar'
      });
    } else {
      Swal.fire({
        icon:'error',
        title: 'Algo ha ocurrido!',
        text: `No fue posible realizar la compra.`,
        background: '#111111',
        color: '#b7b7b7',
        confirmButtonColor: '#4e4e4e',
        confirmButtonText: 'Cerrar'
      });
    }
  };
 
  return (
    <Box className="formContainer" sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      margin: '20px'
    }}>
      <Typography variant="h2" sx={{ fontSize: {xs: '1rem', sm: '1.2rem', md: '1.4rem'}, margin: '10px', fontWeight: 'bold', color: '#fff' }}>
        Complete el formulario para realizar su pedido
      </Typography>
      <form className="orderForm" >
        <FormInput
          label="Nombre y Apellido"
          type="text"
          placeholder="Nombre Apellido"
          onChange={setBuyerName}
          validationRegex={/^[A-z ]+$/}
        />
        <FormInput
          label="Número de Teléfono"
          type="tel"
          placeholder="xxxxxxxxxx"
          onChange={setPhoneNumber}
          validationRegex={/^\d{8,12}$/}
        />
        <FormInput
          label="Email"
          type="email"
          placeholder="Example@example.com"
          onChange={setEmail}
          validationRegex={
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          }
        />
        <Box>
          <Button 
          sx={{
            border: 'none',
            background: 'none',
            marginTop: '20px',
            color: '#b7b7b7',
            '&:hover': { backgroundColor: 'transparent'}
          }} 
          className= 'btnForm'
          type="button" onClick={validateForm}>
            { validateFormConditions ? <Link className="checkoutLink" to={'/'}>Solicitar Pedido</Link> : <Link className="checkoutLink" to={''}>Solicitar Pedido</Link> }
          </Button>
        </Box>
      </form>
    </Box>
  );
}