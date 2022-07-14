import React from "react";
 
export const cartContext = React.createContext(null);
 
const defaultCart = [];
const cartCountDefault = 0;

export default function CartContext({ children }) {
  
  const [cart, setCart] = React.useState(defaultCart);
  const [cartCount, setCartCount] = React.useState(cartCountDefault);


  const increaseCartCount = (quantity) => {
    setCartCount(cartCount + quantity); 
  }

  const decreaseCartCount = product => {
    setCartCount(cartCount - product.quantity);
  }
 
  const isInCart = (productId) =>
    cart.some((product) => product.id === productId);
 
  const updateProductQuantity = (product, quantity) =>
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + quantity,
            }
          : item
      )
    );
 
  const addNewProduct = (product, quantity) =>
    setCart((prevCart) => [...prevCart, { ...product, quantity }]);
 
  const addItem = (product, quantity) => {
    if (isInCart(product.id)) {
      updateProductQuantity(product, quantity);
    } else {
      addNewProduct(product, quantity);
    }
  };
 
  const removeProduct = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
    decreaseCartCount(product);
  };
 
  const clear = () => {
    setCart(defaultCart);
    setCartCount(cartCountDefault);
  }
 
  const getQuantity = (productId) => {
    const item = cart.find((product) => product.id === productId);
    return item ? item.quantity : 0;
  };
 
  const totalPrice =(result) => {
    cart.map((product) => (
      result += product.price * product.quantity
    ))
    return result;
  } 

 
  return (
    <>
      <cartContext.Provider value={{ addItem, getQuantity, cart, removeProduct, totalPrice, increaseCartCount, cartCount, clear }}>
        {children}
      </cartContext.Provider>
    </>
  );
}