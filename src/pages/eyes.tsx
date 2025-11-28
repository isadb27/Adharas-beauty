import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { loadProductsByCategory } from "../store/productsSlice";

const Eyes = () => {
  const dispatch = useAppDispatch();
  const { products, loading, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(loadProductsByCategory("eyes"));
  }, [dispatch]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white px-6 py-10">
        <h1 className="text-3xl font-bold mb-6">Eyes</h1>
        <p className="text-gray-400">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Eyes</h1>

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

export default Eyes;
