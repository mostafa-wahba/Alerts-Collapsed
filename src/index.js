import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MainContextProvider from "./Context/MainContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MainContextProvider>
    <App />
  </MainContextProvider>
);
