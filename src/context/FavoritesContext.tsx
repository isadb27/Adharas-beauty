import React, { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "../data/products";

type FavoritesContextType = {
  favorites: Product[];
  toggleFavorite: (product: Product) => void;
  isFavorite: (productId: number | string) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Product[]>([]);

  const toggleFavorite = (product: Product) => {
    setFavorites((prevFavorites) => {
      const exists = prevFavorites.some((fav) => fav.id === product.id);
      if (exists) {
        return prevFavorites.filter((fav) => fav.id !== product.id);
      } else {
        return [...prevFavorites, product];
      }
    });
  };

  const isFavorite = (productId: number | string) => {
    return favorites.some((fav) => fav.id === productId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites debe usarse dentro de un FavoritesProvider");
  }
  return context;
};
