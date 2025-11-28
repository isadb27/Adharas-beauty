import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { fetchProductsByCategory } from "../api/productsApi";
import type { Product } from "../types/Product";

const Lips = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
useEffect(() => {
  async function load() {
    const data = await fetchProductsByCategory("lips");
    console.log("Productos LIPS:", data);
    setProducts(data);
    setLoading(false);
  }
  load();
}, []);

  useEffect(() => {
    async function load() {
      const data = await fetchProductsByCategory("lips");
      setProducts(data);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white px-6 py-10">
        <h1 className="text-3xl font-bold mb-6">Lips</h1>
        <p className="text-gray-400">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Lips</h1>

      {products.length === 0 ? (
        <p className="text-gray-400">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      )}
    </div>
  );
};


export default Lips;
