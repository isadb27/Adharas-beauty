import { Routes, Route } from "react-router-dom";
import "./App.css";
import AddProduct from "./pages/AddProduct";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<AddProduct />} />
      </Routes>
    </div>
  );
}
