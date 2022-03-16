import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { CartProvider } from "./cart-context";
import { ThemeProvider } from "./theme-context";
import { LocalizationProvider } from "./localization-context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <LocalizationProvider>
      <ThemeProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ThemeProvider>
    </LocalizationProvider>
  </StrictMode>,
  rootElement
);
