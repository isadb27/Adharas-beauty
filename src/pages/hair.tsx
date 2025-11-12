import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { fetchProductsByCategory } from "../api/productsApi";
import type { Product } from "../data/products";

export default function Hair() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProductsByCategory("hair")
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="text-center text-white py-10">Loading hair products...</div>;
  }

  return (
    <section className="px-6 py-12">
      <h2 className="text-3xl font-bold tracking-widest uppercase mb-10 text-center text-adhara-pink">
        Hair Collection
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {products.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}
