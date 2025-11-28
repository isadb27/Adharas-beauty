import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useAppDispatch } from "../store/hooks";
import { addToCart } from "../store/cartSlice";
import { useFavorites } from "../context/FavoritesContext";

const ProductDetail: React.FC = () => {
  const { slug } = useParams();
  const dispatch = useAppDispatch();
  const { favorites, toggleFavorite } = useFavorites();

  // Buscar producto por ID
 const product = useSelector((state: RootState) => {
  console.log("🔍 SLUG DE LA URL:", slug);
  console.log("📦 Productos en Redux:", state.products.products);

  return state.products.products.find((p) => String(p.id) === slug);
});

  if (!product) {
    return (
      <p className="text-center py-20 text-gray-400">
        Producto no encontrado.
      </p>
    );
  }

  const isFavorite = favorites.some((f) => f.id === product.id);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: Number(product.price),
        image: product.image, // ← CORREGIDO
      })
    );
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <div className="grid md:grid-cols-2 gap-10">
        
        <div className="flex flex-col items-center">
          <img
            src={product.image} // ← CORREGIDO
            alt={product.name}
            className="rounded-2xl w-80 h-80 object-cover shadow-lg"
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <h1 className="text-3xl font-bold">{product.name}</h1>

            <button
              onClick={() => toggleFavorite(product)}
              className="text-2xl text-pink-500 hover:scale-110 transition-transform"
            >
              {isFavorite ? "❤️" : "🤍"}
            </button>
          </div>

          <p className="text-lg text-gray-300">${product.price}</p>

          <div className="mt-8 flex gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition-all shadow-md"
            >
              🛒 Añadir al carrito
            </button>
          </div>

          <div className="mt-8 space-y-4">
            <p className="text-gray-300">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
