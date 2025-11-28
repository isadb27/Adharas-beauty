import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./store/store";

import { BrowserRouter } from "react-router-dom";

// ⬅️ IMPORTANTE: AGREGAR ESTO
import { CartProvider } from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CartProvider>   {/* ⬅️ NECESARIO PARA QUE useCart NO ROMPA */}
          <App />
        </CartProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
