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
import SellerProfile from "./pages/SellerProfile"; // NUEVO PERFIL VENDEDOR

import Cart from "./pages/cart";
import SearchResults from "./pages/SearchResults"; 

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
<<<<<<< HEAD

          <Route index element={<Navigate to="/login" replace />} />

          <Route path="/" element={<MainLayout />}>

            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
=======

          {/* REDIRECCIÓN INICIAL */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* LOGIN / SIGNUP / FORGOT SIN NAVBAR Y SIN FOOTER */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* TODO LO DEMÁS CON NAVBAR + FOOTER */}
          <Route path="/" element={<MainLayout />}>
>>>>>>> 6148158266bd866db067e32060ddd1dd0d0f2069

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

            {/* PERFIL CLIENTE */}
            <Route path="profile" element={<ClientUser />} />

<<<<<<< HEAD
            <Route path="search" element={<SearchResults />} />

=======
            {/* PERFIL VENDEDOR*/}
            <Route path="seller-profile" element={<SellerProfile />} />

            {/* Fallback */}
>>>>>>> 6148158266bd866db067e32060ddd1dd0d0f2069
            <Route path="*" element={<Navigate to="/login" replace />} />

          </Route>

        </Routes>

      </div>
    </FavoritesProvider>
  );
}
