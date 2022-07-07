import React from 'react';
import { createContext, useState } from 'react';

export const cartContext = createContext(null);

export default function CartContext({ children }) {

	const [cart, setCart] = useState([]);
	
	const addItem = (productDetail, quantity ) => {
		const addedProduct = {
			id: productDetail.id, 
			title: productDetail.title, 
			category: productDetail.category,   
			stock: productDetail.stock, 
			initial: productDetail.initial,
			quantity: quantity,	
			price: productDetail.price
		}
		
		setCart(cart);
		console.log(cart)
		// alert(`Agregaste ${initial} producto/s al carrito de compra.`)
	};

//   const addItem = (item, quantity) => {

// 	}

// 	const removeItem = (itemId) => {

// 	}

	// const clear = () => {
	// 	setCart([]);
	// }
// 	const isInCart = (id) => {

// 		return i | -1;
// 	}


  return (
    <>
    	<cartContext.Provider value={{ addItem }}>{children}</cartContext.Provider>
    </>
  )
}
