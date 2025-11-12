import { Routes, Route, Navigate } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";

import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-dvh flex flex-col bg-adhara-black text-white">
        <main className="flex-1">
          <Routes>
            {/* AUTH */}
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* SHOP */}
            <Route path="/products" element={<Products />} />
            <Route path="/product/:slug" element={<ProductDetail />} />

            {/* fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
