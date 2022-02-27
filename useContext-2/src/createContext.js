import { createContext, useContext, useState } from "react";

const cartLogger = () => console.log("carting...");

const defaultContextValue = {
  items: 99,
  logger: cartLogger
};
const CartContext = createContext(defaultContextValue);

const CartProvider = ({ children }) => {
  const [items, setItems] = useState(5);
  return (
    <CartContext.Provider value={defaultContextValue}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
