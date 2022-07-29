import React from "react";
import { cartContext } from "../../Context/CartContext";
import { useContext } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';
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
    <div className="formContainer">
      <h2 className="orderTitle">
        Complete el formulario para realizar su pedido
      </h2>
      <form className="orderForm" >
        <FormInput
          className="formInput"
          label="Nombre y Apellido"
          type="text"
          placeholder="Nombre Apellido"
          onChange={setBuyerName}
          validationRegex={/^[A-z ]+$/}
        />
        <FormInput
          className="formInput"
          label="Número de Teléfono"
          type="tel"
          placeholder="xxxxxxxxxx"
          onChange={setPhoneNumber}
          validationRegex={/^\d{8,12}$/}
        />
        <FormInput
          className="formInput"
          label="Email"
          type="email"
          placeholder="Example@example.com"
          onChange={setEmail}
          validationRegex={
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          }
        />
        <div>
          <Button type="button" onClick={validateForm}>
            { validateFormConditions ? <Link className="checkoutLink" to={'/'}>Solicitar Pedido</Link> : <Link className="checkoutLink" to={''}>Solicitar Pedido</Link> }
          </Button>
        </div>
      </form>
    </div>
  );
}