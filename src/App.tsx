import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddProduct from "./pages/AddProduct";
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

import Favorites from "./pages/Favorites";
import Landing from "./pages/Landig";

import "./App.css";

export default function App() {
  return (
    <CartProvider>
      <FavoritesProvider>
        <div className="min-h-screen flex flex-col bg-black text-white font-sans">

          <Routes>
            {/* RUTAS PÚBLICAS */}
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* RUTAS PRIVADAS */}
            <Route
              path="/*"
              element={
                <>
                  <Navbar />

                  <main className="flex-1">
                    <Routes>
                      <Route path="/home" element={<Landing />} />

                      <Route path="/lips" element={<Lips />} />
                      <Route path="/eyes" element={<Eyes />} />
                      <Route path="/brows" element={<Brows />} />
                      <Route path="/face" element={<Face />} />
                      <Route path="/hair" element={<Hair />} />
                      <Route path="/skincare" element={<Skincare />} />

                      <Route path="/favorites" element={<Favorites />} />

                      <Route path="/product/:slug" element={<ProductDetail />} />

                      <Route path="/add-product" element={<AddProduct />} />

                      <Route path="*" element={<Navigate to="/home" replace />} />
                    </Routes>
                  </main>

                  <Footer />
                </>
              }
            />
          </Routes>

        </div>
      </FavoritesProvider>
    </CartProvider>
  );
}
