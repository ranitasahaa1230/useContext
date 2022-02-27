import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { CartContext } from "./createContext";

const cartLogger = () => console.log("carting...");

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CartContext.Provider
      value={{
        items: 6,
        // logger:()=>console.log("carting......")
        logger: cartLogger
      }}
    >
      <App />
    </CartContext.Provider>
  </StrictMode>,
  rootElement
);
