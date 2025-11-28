import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchProducts } from "../api/productsApi";
import ProductCard from "../components/ProductCard";
import type { Product } from "../types/Product";

export default function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const normalizedQuery = query.toLowerCase().trim();

  const filtered = products.filter((p) =>
    p.name?.toLowerCase().includes(normalizedQuery)
  );

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl mb-4">
        Results for: <span className="text-pink-400">"{query}"</span>
      </h2>

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : filtered.length === 0 ? (
        <p className="text-gray-400 text-lg">No products found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {filtered.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      )}
    </div>
  );
}
