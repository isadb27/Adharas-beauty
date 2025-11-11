import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";       // importa tu componente principal
import "./index.css";              // importa Tailwind y tus estilos

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
