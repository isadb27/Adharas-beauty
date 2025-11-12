import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import ProductCard from "../components/ProductCard";

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <section className="px-6 py-12">
      <h2 className="text-3xl font-bold tracking-widest uppercase mb-10 text-center text-adhara-pink">
        Your Favorites 💖
      </h2>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-400">You haven’t added any favorites yet.</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-8">
          {favorites.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      )}
    </section>
  );
}
