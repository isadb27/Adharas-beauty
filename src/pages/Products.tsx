import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/products";

export default function Products() {
  return (
    <main className="flex flex-wrap justify-center gap-6 p-6 bg-black min-h-screen">
      {PRODUCTS.map((p) => (
        <ProductCard key={p.id} p={p} />
      ))}
    </main>
  );
}
