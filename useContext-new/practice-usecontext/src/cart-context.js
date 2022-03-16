import { createContext, useContext, useState } from "react";

const cartLogger = () => console.log("carting.......");

const defaultContextValue = {
  items: 9,
  logger: cartLogger
};
const CartContext = createContext(defaultContextValue);

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState(5);

  const addToCart = () => {
    setProducts((itemss) => itemss + 1);
  };

  return (
    <CartContext.Provider value={{ products, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
