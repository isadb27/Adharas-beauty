import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import { useCart } from "../context/CartContext";

const staticProduct = {
  id: 1,
  name: "ANIK BONITA LIP GLOSS",
  price: "$25.00",
  image: "/Rectangle%2095.png",
  images: [
    "/Rectangle%2095.png",
    "/Rectangle%2098.png",
    "/Rectangle%20102.png",
    "/Rectangle%2096.png",
  ],
  rating: 5,
  reviewsCount: 502,
  tones: [
    { name: "Crystal", hex: "#FFFFFF" },
    { name: "Nude Rose", hex: "#E8C8C6" },
    { name: "Petal Pink", hex: "#E9B7BE" },
    { name: "Berry", hex: "#B31A38" },
  ],
  details: {
    description:
      "Gloss de alto brillo y textura ligera (no pegajoso). Realza el color natural con efecto juicy.",
    specs:
      "Contenido 4.5 ml · Acabado brillante · Aroma suave vainilla · Vegano · Cruelty-free.",
    ingredients:
      "Hydrogenated Polyisobutene, Diisostearyl Malate, Silica Dimethyl Silylate, Flavor, Tocopheryl Acetate, +/- CI 16035, CI 77491.",
    howTo:
      "Aplica en labio desnudo o sobre labial. Para volumen, concentra al centro.",
  },
};

const ProductDetail: React.FC = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const { addToCart } = useCart();

  const isFavorite = favorites.some((fav) => fav.id === staticProduct.id);

  const handleAddToCart = () => {
    addToCart(staticProduct);
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="flex flex-col items-center">
          <img
            src={staticProduct.image}
            alt={staticProduct.name}
            className="rounded-2xl w-80 h-80 object-cover shadow-lg"
          />
          <div className="flex gap-2 mt-4">
            {staticProduct.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${staticProduct.name}-${index}`}
                className="w-16 h-16 rounded-xl object-cover cursor-pointer hover:opacity-80"
              />
            ))}
          </div>
        </div>

        <div className="space-y-4">

          <div className="flex items-start justify-between">
            <h1 className="text-3xl font-bold">{staticProduct.name}</h1>
            <button
              onClick={() => toggleFavorite(staticProduct)}
              className="text-2xl text-pink-500 hover:scale-110 transition-transform"
            >
              {isFavorite ? "❤️" : "🤍"}
            </button>
          </div>

  
          <p className="text-lg text-gray-300">{staticProduct.price}</p>

          
          <div className="flex items-center gap-2">
            {Array.from({ length: staticProduct.rating }).map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">★</span>
            ))}
            <span className="text-gray-400 text-sm">
              ({staticProduct.reviewsCount} reseñas)
            </span>
          </div>

  
          <div className="mt-4">
            <h3 className="text-sm uppercase text-gray-400 mb-2">Tonos</h3>
            <div className="flex gap-3">
              {staticProduct.tones.map((tone, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className="w-8 h-8 rounded-full border border-gray-600"
                    style={{ backgroundColor: tone.hex }}
                  ></div>
                  <span className="text-xs mt-1">{tone.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition-all shadow-md"
            >
              🛒 Añadir al carrito
            </button>
          </div>

          <div className="mt-8 space-y-4">
            <p className="text-gray-300">{staticProduct.details.description}</p>
            <p className="text-gray-400 text-sm">{staticProduct.details.specs}</p>
            <p className="text-gray-500 text-sm">
              <strong>Ingredientes:</strong> {staticProduct.details.ingredients}
            </p>
            <p className="text-gray-500 text-sm">
              <strong>Modo de uso:</strong> {staticProduct.details.howTo}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
