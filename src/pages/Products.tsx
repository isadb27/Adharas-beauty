import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/products";

export default function Products() {
  // Diagnóstico visible en consola
  // (si no ves nada, abre F12 y revisa)
  // console.log("PRODUCTS:", PRODUCTS);

  const items = Array.isArray(PRODUCTS) ? PRODUCTS : [];

  if (items.length === 0) {
    return (
      <main className="grid min-h-screen place-items-center bg-adhara-black text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold">No hay productos</h2>
          <p className="mt-2 text-white/70">
            Revisa <code className="text-white/90">src/data/products.ts</code> y confirma que
            <code className="mx-1">PRODUCTS</code> tenga al menos un objeto.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-wrap justify-center gap-8 p-10 bg-adhara-black min-h-screen">
      {items.map((p) => (
        <Link
          key={p.id}
          to={`/product/${p.slug ?? p.id}`}
          className="hover:scale-[1.02] transition-transform block"
        >
          <ProductCard p={p} />
        </Link>
      ))}
    </main>
  );
}
