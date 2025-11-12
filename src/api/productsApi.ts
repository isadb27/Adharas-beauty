import { lipsProducts } from "../data/lipsProducts";
import { eyesProducts } from "../data/eyesProducts";
import { faceProducts } from "../data/faceProducts"; 
import { skincareProducts } from "../data/skincareProducts";
import { hairProducts } from "../data/hairProducts";
import type { Product } from "../data/products";

export async function fetchProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        ...lipsProducts.map((p: Product) => ({ ...p, category: "lips" })),
        ...eyesProducts.map((p: Product) => ({ ...p, category: "eyes" })),
        ...faceProducts.map((p: Product) => ({ ...p, category: "face" })),
        ...skincareProducts.map((p: Product) => ({ ...p, category: "skincare" })),
        ...hairProducts.map((p: Product) => ({ ...p, category: "hair" })),
      ]);
    }, 100);
  });
}

export async function fetchProductsByCategory(category: string): Promise<Product[]> {
  const all = await fetchProducts();
  return all.filter((p: Product) => p.category === category);
}
