import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { LocalisationProvider } from "./localisation-context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <LocalisationProvider>
      <App />
    </LocalisationProvider>
  </StrictMode>,
  rootElement
);
