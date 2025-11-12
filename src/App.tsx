import { Routes, Route, Navigate } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-dvh flex flex-col bg-adhara-black text-white">
        <main className="flex-1">
          <Routes>
            {/* HOME */}
            <Route path="/" element={<Products />} />
            {/* DETAIL */}
            <Route path="/product/:slug" element={<ProductDetail />} />
            {/* fallback por si el host no sirve "/" como raíz */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
