import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../api/productsApi";
import { Product } from "../types/Product";

const heroBanners = [
  "/banners/banner1.jpg",
  "/banners/banner2.jpg",
  "/banners/banner3.jpg",
];

const embraceBanners = [
  "/banners/embrace1.jpg",
  "/banners/embrace2.jpg",
  "/banners/embrace3.jpg",
];

const mundoFondo = "/banners/mundo1.png";

export default function Landing() {
  const [products, setProducts] = useState<Product[]>([]);
  const [heroIndex, setHeroIndex] = useState(0);
  const [embraceIndex, setEmbraceIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const data = await fetchProducts();
      setProducts(data.slice(0, 4));
      setLoading(false);
    }
    load();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroBanners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setEmbraceIndex((prev) => (prev + 1) % embraceBanners.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
      <section className="w-full">
        <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden">
          <img
            src={heroBanners[heroIndex]}
            alt="Banner"
            className="w-full h-full object-cover transition-all duration-700"
          />

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {heroBanners.map((_, i) => (
              <button
                key={i}
                onClick={() => setHeroIndex(i)}
                className={`w-2.5 h-2.5 rounded-full ${
                  i === heroIndex ? "bg-fuchsia-400" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-fuchsia-400 mb-6">
          Best Sellers
        </h2>

        {loading ? (
          <p className="text-gray-300">Loading products...</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {products.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        )}
      </section>

      <section className="w-full py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden h-[260px] md:h-[320px]">
            <img
              src={embraceBanners[embraceIndex]}
              alt="Embrace"
              className="w-full h-full object-cover transition-all duration-700"
            />

            <div className="absolute inset-0 bg-black/35 flex flex-col justify-center items-center px-6">
              <p className="text-xs md:text-sm uppercase tracking-wider">
                Embrace your beauty
              </p>
              <h3 className="text-xl md:text-3xl font-semibold">
                Beauty is for everyone
              </h3>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {embraceBanners.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setEmbraceIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full ${
                    i === embraceIndex ? "bg-fuchsia-400" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div
            className="relative rounded-3xl overflow-hidden min-h-[350px] bg-cover bg-center"
            style={{ backgroundImage: `url(${mundoFondo})` }}
          >
            <div className="absolute inset-0 bg-black/20" />

            <div className="relative px-6 md:px-10 py-10">
              <p className="text-sm font-semibold tracking-wider text-white">
                OVER
              </p>
              <p className="text-4xl font-bold text-fuchsia-500">5,000,000</p>
              <p className="text-xl font-semibold text-white">
                SALES WORLDWIDE!
              </p>

              <p className="text-sm mt-2 text-gray-200">
                Join the{" "}
                <span className="text-fuchsia-400 font-semibold">
                  Global Beauty
                </span>{" "}
                Movement.
              </p>

              <Bubble className="absolute top-8 left-[10%]">
                Becoming a member was the best decision I ever made.
              </Bubble>
              <Bubble className="absolute top-6 right-[15%]">
                Avec Adharas, mon maquillage ne bouge pas.
              </Bubble>
              <Bubble className="absolute top-32 left-[20%]">
                amo comprar aquí
              </Bubble>
              <Bubble className="absolute bottom-16 right-[20%]">
                best prices and sales ever!!!
              </Bubble>
              <Bubble className="absolute bottom-10 left-[15%]">
                Eu amo seus produtos.
              </Bubble>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Bubble({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`px-4 py-2 rounded-full bg-white text-black text-[10px] md:text-xs shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}
