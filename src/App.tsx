import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddProduct from "./pages/AddProduct";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import { CartProvider } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";

import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Lips from "./pages/lips";
import Brows from "./pages/brows";
import Eyes from "./pages/eyes";
import Face from "./pages/face";
import Hair from "./pages/hair";
import Skincare from "./pages/skincare";
import Favorites from "./pages/favorites";

import "./App.css";

export default function App() {
  return (
    <CartProvider>
      <FavoritesProvider>
        <div className="min-h-screen flex flex-col bg-black text-white font-sans">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />

              <Route path="/lips" element={<Lips key="lips" />} />
              <Route path="/eyes" element={<Eyes key="eyes" />} />
              <Route path="/brows" element={<Brows key="brows" />} />
              <Route path="/face" element={<Face key="face" />} />
              <Route path="/hair" element={<Hair key="hair" />} />
              <Route path="/skincare" element={<Skincare key="skincare" />} />
              <Route path="/favorites" element={<Favorites key="favorites" />} />

              <Route path="/add-product" element={<AddProduct />} />

              {/* FALLBACK */}
              <Route path="*" element={<Navigate to="/lips" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </FavoritesProvider>
    </CartProvider>
  );
}
