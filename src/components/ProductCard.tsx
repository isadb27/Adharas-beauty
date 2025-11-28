import React, { useState } from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import { useFavorites } from "../context/FavoritesContext";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { addToCart } from "../store/cartSlice";
import type { Product } from "../types/Product";

interface ProductCardProps {
  p: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ p }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites();

  const isFavorite = favorites.some((item) => item.id === p.id);

  const imageUrl =
    p.main_imagen_url ||
    p.image ||
    "https://via.placeholder.com/300?text=No+Image";

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: p.id,
        name: p.name,
        price: Number(p.price),
        image: imageUrl,
      })
    );
  };

  return (
    <div className="rounded-xl shadow-md p-4 bg-black text-white relative">

      <button
        onClick={() => toggleFavorite(p)}
        className="absolute top-3 right-3"
      >
        <FaHeart
          color={isFavorite ? "#ff4b91" : "lightgray"}
          size={22}
        />
      </button>

      <img
        src={imageUrl}
        alt={p.name}
        className="w-full h-48 object-cover rounded-lg cursor-pointer"
        onClick={() => navigate(`/product/${p.id}`)}
      />

      <h3
        className="mt-3 text-lg font-semibold cursor-pointer"
        onClick={() => navigate(`/product/${p.id}`)}
      >
        {p.name}
      </h3>

      <p className="text-pink-400 font-bold">
        ${Number(p.price)}
      </p>

      {/* ⭐ CENTRADAS */}
      <div className="flex mt-2 justify-center">
        {[1, 2, 3, 4, 5].map((value) => (
          <FaStar
            key={value}
            size={20}
            onClick={() => setRating(value)}
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(0)}
            color={
              (hover || rating) >= value
                ? "#ff7eb9"
                : "lightgray"
            }
            className="cursor-pointer"
          />
        ))}
      </div>

      <button
        onClick={handleAddToCart}
        className="mt-3 w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600"
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default ProductCard;
