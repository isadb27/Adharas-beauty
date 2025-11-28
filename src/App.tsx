import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { FavoritesProvider } from "./context/FavoritesContext";

import AddProduct from "./pages/AddProduct";
import ProductDetail from "./pages/ProductDetail";

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
import ClientUser from "./pages/ClientUser";
import Cart from "./pages/cart";

import "./App.css";

export default function App() {
  return (
    <FavoritesProvider>
      <div className="min-h-screen flex flex-col bg-black text-white font-sans">

        <Routes>
 
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route
            path="/*"
            element={
              <div className="flex flex-col min-h-screen">
                <Navbar />

                <main className="flex-1">
                  <Routes>
                    <Route path="home" element={<Landing />} />

                    <Route path="lips" element={<Lips />} />
                    <Route path="eyes" element={<Eyes />} />
                    <Route path="brows" element={<Brows />} />
                    <Route path="face" element={<Face />} />
                    <Route path="hair" element={<Hair />} />
                    <Route path="skincare" element={<Skincare />} />

                    <Route path="favorites" element={<Favorites />} />
                    <Route path="product/:slug" element={<ProductDetail />} />

                    <Route path="cart" element={<Cart />} />

                    <Route path="add-product" element={<AddProduct />} />
                    <Route path="profile" element={<ClientUser />} />

                    <Route path="*" element={<Navigate to="/home" replace />} />
                  </Routes>
                </main>

                <Footer />
              </div>
            }
          />
        </Routes>

      </div>
    </FavoritesProvider>
  );
}
