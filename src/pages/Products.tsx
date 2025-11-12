import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/products";

export default function Products() {
  return (
    <main className="flex flex-wrap justify-start gap-8 p-10 bg-adhara-black min-h-screen">
        
      {PRODUCTS.map((p) => (
        <ProductCard key={p.id} p={p} />
      ))}
    </main>
  );

}

