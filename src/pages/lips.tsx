import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";
import Banner from "../components/Banner"; // asegúrate de tener este componente
import { fetchProductsByCategory } from "../api/productsApi";
import type { Product } from "../data/products";

const Lips: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProductsByCategory("lips")
      .then((data: Product[]) => setProducts(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Navbar />
      <Banner />

      {loading ? (
        <div className="text-center text-white py-10 text-lg font-semibold">
          Loading products...
        </div>
      ) : (
        <ProductGrid products={products} />
      )}

      <Footer />
    </>
  );
};

export default Lips;
