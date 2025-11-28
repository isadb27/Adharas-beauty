import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { addToCart } from "../store/cartSlice";
import { useFavorites } from "../context/FavoritesContext";
import { fetchProductBySlug } from "../api/productsApi"; // 🔥 NUEVO

const ProductDetail: React.FC = () => {
  const { slug } = useParams();
  const dispatch = useAppDispatch();
  const { favorites, toggleFavorite } = useFavorites();

  const [product, setProduct] = useState<any>(null);

  /** 🔥 Cargar producto real por slug */
  useEffect(() => {
    const load = async () => {
      const data = await fetchProductBySlug(slug!);
      setProduct(data);
    };
    load();
  }, [slug]);

  if (!product) {
    return <p className="text-center py-20 text-gray-400">Cargando producto...</p>;
  }

  const isFavorite = favorites.some((f) => f.id === product.id);

  /** 🔥 Agregar al carrito */
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: String(product.id),
        name: product.name,
        price: Number(product.price),
        image: product.image,
      })
    );
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <div className="grid md:grid-cols-2 gap-10">
        {/* 🔥 IMAGEN PRINCIPAL */}
        <div className="flex flex-col items-center">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-2xl w-80 h-80 object-cover shadow-lg"
          />

          {/* 🔥 MINI GALERÍA (si tienes más imágenes en BD) */}
          {product.images?.length > 1 && (
            <div className="flex gap-2 mt-4">
              {product.images.map((img: string, i: number) => (
                <img
                  key={i}
                  src={img}
                  className="w-16 h-16 rounded-xl object-cover cursor-pointer hover:opacity-80"
                />
              ))}
            </div>
          )}
        </div>

        {/* 🔥 INFO */}
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

          {/* 🔥 DESCRIPCIÓN */}
          <div className="mt-8 space-y-4">
            <p className="text-gray-300">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
