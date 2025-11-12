import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Lips from "./pages/lips"; 

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Lips />
      </main>

      <Footer />
    </div>
  );
}
