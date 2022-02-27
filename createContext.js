import { createContext } from "react";

const cartLogger = () => console.log("carting...");

const CartContext = createContext({ items: 4, logger: cartLogger });

export { CartContext };
