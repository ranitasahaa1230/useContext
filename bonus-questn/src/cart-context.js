import { createContext, useContext, useState } from "react";

const defaultItems = {
  items: 9,
  logger: () => console.log("Carting.......")
};

const CartContext = createContext(defaultItems);

const CartProvider = ({ children }) => {
  const [items, setItems] = useState(4);

  function addToCart() {
    setItems((itemss) => itemss + 1);
  }

  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
