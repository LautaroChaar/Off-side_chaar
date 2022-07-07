import React from "react";
 
export const cartContext = React.createContext(null);
 
const defaultCart = [];
 
export default function CartContext({ children }) {
  
  const [cart, setCart] = React.useState(defaultCart);
 
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
  };
 
  const clear = () => setCart(defaultCart);
 
  const getQuantity = (productId) => {
    const item = cart.find((product) => product.id === productId);
    return item ? item.quantity : 0;
  };
 
  console.info("cart: ", cart);
 
  return (
    <>
      <cartContext.Provider value={{ addItem, getQuantity }}>
        {children}
      </cartContext.Provider>
    </>
  );
}