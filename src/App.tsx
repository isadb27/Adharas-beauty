import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddProduct from "./pages/AddProduct";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import { CartProvider } from "./context/CartContext";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Lips from "./pages/lips";
import Brows from "./pages/brows";

import "./App.css";

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-black text-white font-sans">
        <Navbar />
        <main className="flex-1">
          <Routes>
            {/* AUTH */}
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* SHOP */}
            <Route path="/products" element={<Products />} />
            <Route path="/lips" element={<Lips />} />
            <Route path="/brows" element={<Brows />} />
            <Route path="/product/:slug" element={<ProductDetail />} />

            {/* ADMIN */}
            <Route path="/add-product" element={<AddProduct />} />

            {/* FALLBACK */}
            <Route path="*" element={<Navigate to="/lips" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
