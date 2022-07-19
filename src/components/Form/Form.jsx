import React from 'react';
import { cartContext } from '../../Context/CartContext/CartContext';
import { useContext } from 'react';
import { collection, getFirestore, addDoc } from 'firebase/firestore';
import './Form.css';


export default function Form() {

    const { cart, totalToPay, clear } = useContext(cartContext);


    const [buyerName, setBuyerName] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [email, setEmail] = React.useState('');
		const [orderId, setOrderId] = React.useState('');
    const phoneRegExp = /^\d{8,12}$/;
    const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    function handleSubmit(e) {
      e.preventDefault();
    }

    function handleClickOrder() {
      const order = {
        buyer: { buyerName, phoneNumber, email },
        cart: cart,
        price: totalToPay 
    	};
			const db = getFirestore();
			const ordersRef = collection(db, 'orders');
			addDoc(ordersRef, order).then(({id}) => setOrderId(id));
      clear();
    }


    const validateForm = () => {
      if(buyerName !== "" && phoneNumber !== "" && email !== ""){
        handleClickOrder();
      } else {
        alert("Por favor, complete el formulario.")
      }
  }

  const validateName = (value) => { 
    if ((/^[A-z ]+$/.test(value)) && (value!=="") ){
    setBuyerName(value);
    }
  }

    const validateEmail = (value) => {
      if ((emailRegExp.test(value)) && (value!=="")) {
        setEmail(value);
      } 
    }

    const validatePhone = (value) => {
      if ((value.match(phoneRegExp)) && (value!=="")){
        setPhoneNumber(value); 
      } 
    }

  return (
    <>
      <h2 className='orderTitle'>Complete el formulario para realizar su pedido</h2>
      <form className='orderForm' onSubmit={handleSubmit}>
              <div>
                  <label>Nombre y Apellido</label>
                  <input type="text" placeholder="Nombre Apellido" required onChange={(e) => validateName(e.target.value)} />
              </div>
              <div>
                  <label>Número de Teléfono</label>
                  <input type="tel" placeholder="xxxxxxxxxx" required onChange={(e) => validatePhone(e.target.value)} />
              </div>
              <div>
                  <label>Email</label>
                  <input type="email" placeholder="Example@example.com" required onChange={(e) => validateEmail(e.target.value)} />
              </div>
              <div>
                  <button type="submit" onClick={validateForm}>Solicitar Pedido</button>
              </div>
      </form>
			<p>Su id de compra es: {orderId}</p>
    </>
  )
}
