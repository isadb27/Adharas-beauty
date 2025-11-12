// src/api/productsApi.ts
import { lipsProducts } from "../data/lipsProducts";
import { eyesProducts } from "../data/eyesProducts";
import { faceProducts } from "../data/faceProducts";
import { skincareProducts } from "../data/skincareProducts";
import { hairProducts } from "../data/hairProducts";
import { browsProducts } from "../data/browsProducts"; // 👈 agregado
import type { Product } from "../data/products";

export async function fetchProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        ...lipsProducts.map((p) => ({ ...p, category: "lips" })),
        ...eyesProducts.map((p) => ({ ...p, category: "eyes" })),
        ...faceProducts.map((p) => ({ ...p, category: "face" })),
        ...skincareProducts.map((p) => ({ ...p, category: "skincare" })),
        ...hairProducts.map((p) => ({ ...p, category: "hair" })),
        ...browsProducts.map((p) => ({ ...p, category: "brows" })) // 👈 agregado
      ]);
    }, 100);
  });
}

export async function fetchProductsByCategory(category: string): Promise<Product[]> {
  const all = await fetchProducts();
  return all.filter((p) => p.category === category);
}
