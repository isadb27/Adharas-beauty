import { useEffect, useMemo, useState } from "react";
import type { Product } from "../data/products";

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

function Star({
  filled,
  onEnter,
  onLeave,
  onClick,
}: {
  filled: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onClick: () => void;
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

export default function ProductCard({
  p,
  onQuickAdd,
  onToggleFav,
}: {
  p: Product;
  onQuickAdd?: (id: number, qty: number) => void;
  onToggleFav?: (id: number, fav: boolean) => void;
}) {
  const [rating, setRating] = useState<number>(p.rating ?? 0);
  const [hover, setHover] = useState<number | null>(null);
  const display = useMemo(() => hover ?? rating, [hover, rating]);

  const [qty, setQty] = useState(0);
  const inc = () => {
    const v = qty + 1;
    setQty(v);
    onQuickAdd?.(p.id, v);
  };
  const dec = () => setQty((v) => Math.max(0, v - 1));

  const [isFav, setIsFav] = useState(false);
  useEffect(() => {
    const map = readWishlist();
    setIsFav(Boolean(map[String(p.id)]));
  }, [p.id]);

  const toggleFav = () => {
    setIsFav((prev) => {
      const next = !prev;
      const map = readWishlist();
      if (next) map[String(p.id)] = true;
      else delete map[String(p.id)];
      writeWishlist(map);
      onToggleFav?.(p.id, next);
      return next;
    });
  };

  return (
    <article className="w-[220px] text-left text-white font-[Oswald]">
      <div className="group relative overflow-hidden rounded-xl">
        <img
          src={p.image || "/trendy-chocolate.png"}
          alt={p.name}
          className="h-[230px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {p.bestSeller && (
          <img
            src="/best-seller.png"
            alt="Best Seller"
            className="absolute -right-1.5 -top-1.5 w-[95px] rotate-12"
          />
        )}

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

      <h3 className="mt-3 text-[15px] font-semibold uppercase leading-tight tracking-wide">
        {p.name}
      </h3>

      <div className="mt-2 flex items-center justify-start gap-3">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              filled={i < display}
              onEnter={() => setHover(i + 1)}
              onLeave={() => setHover(null)}
              onClick={() => setRating(i + 1)}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={toggleFav}
          aria-label="Agregar a favoritos"
          className={`transition-transform hover:scale-110 ${
            isFav ? "text-red-500" : "text-white"
          }`}
        >
          <Heart filled={isFav} />
        </button>
      </div>

      <p className="mt-1 text-sm text-gray-300">{p.price}</p>
    </article>
  );
}
