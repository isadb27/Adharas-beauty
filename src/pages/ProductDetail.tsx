import { useMemo, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { PRODUCTS, type Product } from "../data/products";
import { useCart } from "../context/CartContext";

function StarRating({ value = 0 }: { value?: number }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < full;
        const isHalf = i === full && half;
        return (
          <span
            key={i}
            className={`text-lg sm:text-xl ${
              filled ? "text-white" : isHalf ? "text-white/70" : "text-white/20"
            }`}
          >
            ★
          </span>
        );
      })}
    </div>
  );
}

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-3"
      >
        <span className="font-semibold tracking-wide">{title}</span>
        <span className="text-xl">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="pb-4 text-sm text-white/80">{children}</div>}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product: Product | undefined = useMemo(
    () => PRODUCTS.find((p) => p.slug === slug || p.id === slug),
    [slug]
  );

  const [current, setCurrent] = useState<number>(0);
  const [qty, setQty] = useState<number>(1);
  const [tone, setTone] = useState<string | null>(null);

  if (!product) {
    return (
      <div className="min-h-[60vh] grid place-items-center text-center text-white bg-adhara-black">
        <div>
          <p className="text-2xl font-bold">Producto no encontrado</p>
          <Link to="/" className="underline text-adhara-pink">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  const handleAdd = () => {
    addToCart({
      id: product.id + (tone ? `-${tone}` : ""),
      name: product.name + (tone ? ` (${tone})` : ""),
      price: product.price,
      image: product.image,
      quantity: qty,
    });
  };

  return (
    <div className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* GALERÍA */}
        <section className="lg:col-span-6">
          <div className="grid lg:grid-cols-[1fr_96px] gap-4">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-900">
              {product.bestSeller && (
                <span className="absolute left-3 top-3 z-10 rounded-full border-2 border-white px-3 py-1 text-[10px] sm:text-xs font-bold tracking-wider">
                  BEST SELLER
                </span>
              )}
              <img
                src={product.images?.[current] ?? product.image}
                alt={`${product.name} - imagen ${current + 1}`}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>

            {/* thumbs vertical (desktop) */}
            <div className="hidden lg:flex lg:flex-col lg:gap-3">
              {product.images?.map((src: string, i: number) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`relative h-20 w-24 overflow-hidden rounded-xl ring-2 transition 
                    ${current === i ? "ring-white" : "ring-transparent hover:ring-white/40"}`}
                >
                  <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          {/* thumbs horizontales (móvil) */}
          <div className="mt-4 flex gap-3 overflow-x-auto pb-1 lg:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {product.images?.map((src: string, i: number) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-xl ring-2 transition 
                  ${current === i ? "ring-white" : "ring-transparent hover:ring-white/40"}`}
              >
                <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
              </button>
            ))}
          </div>
        </section>

        {/* INFO */}
        <section className="lg:col-span-6">
          <h1
            className="font-[Oswald] uppercase leading-[0.9] text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
            style={{ fontOpticalSizing: "auto" }}
          >
            {product.name}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-2 sm:gap-3 text-sm">
            <StarRating value={product.rating ?? 0} />
            {product.reviewsCount && (
              <span className="text-white/70">
                {product.reviewsCount.toLocaleString()}+ Reviews
              </span>
            )}
          </div>

          <p className="mt-3 sm:mt-4 max-w-prose text-white/80">
            {product.details?.description}
          </p>

          {/* precio + banner */}
          <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <p className="text-2xl sm:text-3xl font-extrabold">
              ${product.price.toFixed(2)}{" "}
              <span className="text-xs sm:text-sm font-normal">UNIT</span>
            </p>
            <div className="rounded-lg bg-[#0B0B0B] px-3 py-2 text-[10px] sm:text-xs text-white/90 ring-1 ring-white/10">
              <span className="font-semibold text-adhara-pink">ADHARAS BEAUTY EXCLUSIVE</span> · 25% off 2+
            </div>
          </div>

          {/* TONES */}
          {!!product.tones?.length && (
            <div className="mt-5">
              <div className="mb-2 text-xs sm:text-sm font-semibold tracking-wide">TONES</div>
              <div className="flex flex-wrap gap-3">
                {product.tones.map((t) => (
                  <button
                    key={t.name}
                    onClick={() => setTone((prev) => (prev === t.name ? null : t.name))}
                    className={`relative h-9 w-9 sm:h-10 sm:w-10 rounded-full ring-2 transition 
                      ${tone === t.name ? "ring-white" : "ring-white/25"}`}
                    style={{ backgroundColor: t.hex }}
                    title={t.name}
                    aria-label={t.name}
                  />
                ))}
              </div>
              {tone && (
                <div className="mt-2 text-xs text-white/70">
                  Seleccionado: <span className="font-semibold">{tone}</span>
                </div>
              )}
            </div>
          )}

          {/* QTY + CTAs */}
          <div className="mt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="inline-flex items-center self-start rounded-full ring-1 ring-white/20 overflow-hidden">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-4 py-2 text-lg" aria-label="decrement">−</button>
              <span className="w-10 text-center font-semibold">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="px-4 py-2 text-lg" aria-label="increment">+</button>
            </div>

            <button onClick={handleAdd} className="flex-1 rounded-full bg-adhara-pink px-6 py-3 text-black font-extrabold uppercase tracking-wide shadow-lg hover:opacity-90">
              add to cart
            </button>

            <button
              onClick={() => { handleAdd(); navigate("/cart"); }}
              className="rounded-full px-6 py-3 font-extrabold uppercase tracking-wide ring-2 ring-white/60 hover:bg-white hover:text-black transition"
            >
              buy now
            </button>
          </div>

          {/* ACORDEONES */}
          <div className="mt-6 rounded-2xl bg-neutral-900/40 p-4 ring-1 ring-white/10">
            <Accordion title="Details"><p>{product.details?.specs}</p></Accordion>
            <Accordion title="Ingredients"><p>{product.details?.ingredients}</p></Accordion>
            <Accordion title="How to use"><p>{product.details?.howTo}</p></Accordion>
          </div>

          {/* VOLVER */}
          <div className="mt-5">
            <button onClick={() => navigate(-1)} className="text-sm underline underline-offset-4 text-white/70 hover:text-white">
              ← Volver
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
