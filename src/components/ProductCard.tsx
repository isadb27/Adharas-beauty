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
  const { toggleFavorite, isFavorite } = useFavorites();
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleClick = () => {
    navigate(`/product/${p.slug}`);
  };

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();

    dispatch(
      addToCart({
        id: String(p.id),
        name: p.name,
        price: Number(p.price.replace("$", "")),
        image: p.image,
      })
    );
  };

  return (
    <div
      onClick={handleClick}
      className="bg-black border border-gray-800 rounded-2xl shadow-md overflow-hidden transition duration-300 hover:shadow-pink-500/30 hover:-translate-y-1 w-64 cursor-pointer"
    >
      <div className="relative">
        <img
          src={p.image}
          alt={p.name}
          className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
        />

        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(p);
          }}
          className="absolute top-3 right-3 text-gray-400 hover:text-pink-500 transition"
        >
          <FaHeart
            size={20}
            color={isFavorite(p.id) ? "#f472b6" : "#9ca3af"}
          />
        </button>
      </div>

      <div className="p-4 text-center">
        <h3 className="text-white text-lg font-semibold tracking-wide mb-1">
          {p.name}
        </h3>
        <p className="text-pink-400 text-sm font-medium mb-3">{p.price}</p>

        <div className="flex justify-center gap-1">
          {[...Array(5)].map((_, index) => {
            const ratingValue = index + 1;
            return (
              <button
                key={index}
                type="button"
                className="focus:outline-none"
                onClick={(e) => {
                  e.stopPropagation();
                  setRating(ratingValue);
                }}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(0)}
              >
                <FaStar
                  size={18}
                  color={
                    ratingValue <= (hover || rating)
                      ? "#f472b6"
                      : "#4b5563"
                  }
                />
              </button>
            );
          })}
        </div>

        <button
          onClick={handleAdd}
          className="mt-3 px-4 py-2 bg-pink-500 text-black font-semibold rounded-lg hover:bg-pink-400 transition"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
