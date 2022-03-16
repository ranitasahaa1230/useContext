import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { LoginProvider } from "./login-context";
import { ThemeProvider } from "./theme-context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <LoginProvider>
        <App />
      </LoginProvider>
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
