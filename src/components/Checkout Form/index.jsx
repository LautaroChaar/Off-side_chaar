import React from "react";
import { cartContext } from "../../Context/CartContext";
import { useContext } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import "./CheckoutForm.css";
import FormInput from "../FormInput";
 
export default function CheckoutForm() {

  const { cart, totalToPay, clear } = useContext(cartContext);
  const [buyerName, setBuyerName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [orderId, setOrderId] = React.useState("");

  function handleClickOrder() {
    const order = {
      buyer: { buyerName, phoneNumber, email },
      cart: cart,
      price: totalToPay,
    };
    const db = getFirestore();
    const ordersRef = collection(db, "orders");
    addDoc(ordersRef, order).then(({ id }) => setOrderId(id));
    clear();
  }
 
  const validateForm = () => {
    if (buyerName !== "" && phoneNumber !== "" && email !== "" && cart !== []) {
      handleClickOrder();
    } else {
      alert("Por favor, complete el formulario.");
    }
  };
 
  return (
    <>
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
          <button type="submit" onClick={validateForm}>
            Solicitar Pedido
          </button>
        </div>
      </form>
      <p>Su id de compra es: {orderId}</p>
    </>
  );
}