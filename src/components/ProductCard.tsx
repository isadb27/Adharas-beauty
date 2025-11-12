import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import type { Product } from "../data/products";

/* ---------- Helpers wishlist (localStorage) ---------- */
const LS_KEY = "adharas:wishlist";
function readWishlist(): Record<string, true> {
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? (JSON.parse(raw) as Record<string, true>) : {};
  } catch {
    return {};
  }
}
function writeWishlist(map: Record<string, true>) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(map));
  } catch {}
}

/* ---------- Star (rating) ---------- */
function Star({
  filled,
  onEnter,
  onLeave,
  onClick,
}: {
  filled: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onClick: (e: React.MouseEvent) => void;
}) {
  return (
    <button
      type="button"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
      aria-label="Calificar"
      className="transition-transform hover:scale-110"
    >
      <svg
        viewBox="0 0 20 20"
        className="h-5 w-5 text-white"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.2"
        aria-hidden="true"
      >
        <path d="M10 1.6l2.47 5.01 5.53.8-4 3.9.95 5.52L10 14.92 5.05 16.83l.95-5.52-4-3.9 5.53-.8L10 1.6z" />
      </svg>
    </button>
  );
}

/* ---------- Heart (wishlist) ---------- */
function Heart({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M12.1 20.3l-1.1-1C6.1 15 3 12.2 3 8.8 3 6.2 5.1 4 7.8 4c1.4 0 2.8.6 3.7 1.7C12.4 4.6 13.8 4 15.2 4 17.9 4 20 6.2 20 8.8c0 3.4-3.1 6.2-8 10.5l-1.1 1z" />
    </svg>
  );
}

/* ---------- ProductCard ---------- */
export default function ProductCard({
  p,
  onToggleFav,
}: {
  p: Product;
  onToggleFav?: (id: string, fav: boolean) => void;
}) {
  const { addToCart } = useCart();

  /* ⭐ rating interactivo */
  const [rating, setRating] = useState<number>(p.rating ?? 0);
  const [hover, setHover] = useState<number | null>(null);
  const display = useMemo(() => hover ?? rating, [hover, rating]);

  /* 🛒 quick add */
  const [qty, setQty] = useState(0);
  const inc = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const v = qty + 1;
    setQty(v);
    addToCart({
      id: p.id,
      name: p.name,
      price: p.price,
      image: p.image,
      quantity: 1,
    });
  };
  const dec = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setQty((v) => Math.max(0, v - 1));
  };

  /* 💖 wishlist (persistente) */
  const [isFav, setIsFav] = useState(false);
  useEffect(() => {
    const map = readWishlist();
    setIsFav(Boolean(map[p.id]));
    setQty(0);
  }, [p.id]);

  const toggleFav = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsFav((prev) => {
      const next = !prev;
      const map = readWishlist();
      if (next) map[p.id] = true;
      else delete map[p.id];
      writeWishlist(map);
      onToggleFav?.(p.id, next);
      return next;
    });
  };

  return (
    <article className="w-[220px] text-left text-white font-[Oswald]">
      {/* Imagen + overlay */}
      <div className="group relative overflow-hidden rounded-xl">
        <Link to={`/product/${p.slug ?? p.id}`}>
          <img
            src={p.image || "/trendy-chocolate.png"}
            alt={p.name}
            className="h-[230px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* BEST SELLER (badge de texto, sin imagen) */}
        {p.bestSeller && (
          <div className="pointer-events-none absolute left-2 top-2">
            <span className="inline-flex items-center rounded-full border border-white/90 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white/95 bg-black/10 backdrop-blur-[1px]">
              BEST SELLER
            </span>
          </div>
        )}

        {/* Overlay QUICK ADD */}
        <div className="pointer-events-none absolute inset-0 hidden items-end justify-center group-hover:flex">
          <div className="pointer-events-auto mb-3 flex items-center gap-3 rounded-md bg-black/55 px-4 py-2">
            <button
              type="button"
              onClick={dec}
              className="grid h-7 w-7 place-items-center rounded-sm border border-white/30 text-lg"
            >
              –
            </button>
            <button
              type="button"
              onClick={inc}
              className="rounded-sm bg-white/15 px-3 py-1 text-sm font-extrabold tracking-wide"
            >
              {qty > 0 ? `QUICK ADD (${qty})` : "QUICK ADD"}
            </button>
            <button
              type="button"
              onClick={inc}
              className="grid h-7 w-7 place-items-center rounded-sm border border-white/30 text-lg"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Nombre (lleva al detalle) */}
      <h3 className="mt-3 text-[15px] font-semibold uppercase leading-tight tracking-wide">
        <Link
          to={`/product/${p.slug ?? p.id}`}
          className="hover:underline underline-offset-2"
        >
          {p.name}
        </Link>
      </h3>

      {/* Rating + corazón */}
      <div className="mt-2 flex items-center justify-start gap-3">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => {
            const idx = i + 1;
            return (
              <Star
                key={i}
                filled={idx <= display}
                onEnter={() => setHover(idx)}
                onLeave={() => setHover(null)}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setRating(idx);
                }}
              />
            );
          })}
        </div>

        <button
          type="button"
          aria-label={isFav ? "Quitar de favoritos" : "Agregar a favoritos"}
          aria-pressed={isFav}
          onClick={toggleFav}
          className={`transition active:scale-95 ${
            isFav ? "text-adhara-pink" : ""
          }`}
          title={isFav ? "En tu wishlist" : "Añadir a wishlist"}
        >
          <Heart filled={isFav} />
        </button>
      </div>

      {/* Precio */}
      <p className="mt-2 text-adhara-pink text-lg font-bold">
        ${p.price.toFixed(2)}
      </p>
    </article>
  );
}
