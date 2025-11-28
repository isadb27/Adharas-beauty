import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import AddProduct from "./pages/AddProduct";
import ProductDetail from "./pages/ProductDetail";
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
import ClientUser from "./pages/ClientUser";
import Cart from "./pages/cart";

import "./App.css";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <FavoritesProvider>
      <div className="min-h-screen flex flex-col bg-black text-white font-sans">

        <Routes>
          
          {/* Redirección inicial */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* TODAS ESTAS RUTAS TIENEN NAVBAR + FOOTER */}
          <Route path="/" element={<MainLayout />}>
            
            {/* Login con nav y footer */}
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="forgot-password" element={<ForgotPassword />} />

            {/* Páginas principales */}
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

            {/* fallback */}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Route>

        </Routes>

      </div>
    </FavoritesProvider>
  );
}
