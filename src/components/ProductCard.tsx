import React, { useState } from "react";
import { useCart } from "../context/CartContext";

interface Product {
  id: number | string;
  name: string;
  price: number | string;
  image: string;
  description?: string; // ✅ opcional para evitar error en lips
}

interface ProductCardProps {
  p: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ p }) => {
  const { addToCart } = useCart();
  const [qty, setQty] = useState(0);

  const inc = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const v = qty + 1;
    setQty(v);
    addToCart({
      id: String(p.id),
      name: p.name,
      price: Number(p.price),
      image: p.image,
      quantity: 1,
    });
  };

  const dec = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (qty > 0) {
      const v = qty - 1;
      setQty(v);
      addToCart({
        id: String(p.id),
        name: p.name,
        price: Number(p.price),
        image: p.image,
        quantity: -1,
      });
    }
  };

  return (
    <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer w-64">
      <img
        src={p.image}
        alt={p.name}
        className="w-full h-52 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{p.name}</h3>
        <p className="mt-1 text-sm text-gray-300">${Number(p.price).toFixed(2)}</p>
        {p.description && (
          <p className="text-xs text-gray-400 mt-1 line-clamp-2">{p.description}</p>
        )}

        <div className="flex items-center justify-between mt-3">
          <button
            onClick={dec}
            disabled={qty === 0}
            className="px-3 py-1 bg-gray-700 text-white rounded-lg disabled:opacity-40"
          >
            -
          </button>

          <span className="text-white font-medium">{qty}</span>

          <button
            onClick={inc}
            className="px-3 py-1 bg-adhara-pink text-white rounded-lg hover:bg-pink-600 transition"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
