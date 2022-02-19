import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./globalStyles";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <GlobalStyles />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
