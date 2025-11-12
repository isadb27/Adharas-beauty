import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; // 👈 Agrega esto
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>       {/* 👈 Envuelve tu App dentro del Router */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
