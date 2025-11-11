import type { Product } from "../data/products";

function Star({ filled = true }: { filled?: boolean }) {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
      <path
        d="M10 1.6l2.47 5.01 5.53.8-4 3.9.95 5.52L10 14.92 5.05 16.83l.95-5.52-4-3.9 5.53-.8L10 1.6z"
        fill={filled ? "#fff" : "none"}
        stroke="#fff"
        strokeWidth="1"
      />
    </svg>
  );
}

export default function ProductCard({ p }: { p: Product }) {
  return (
    <article className="w-[250px] text-center text-white font-[Oswald] relative">
      {/* Imagen */}
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={p.image || "https://placehold.co/600x450/png"}
          alt={p.name}
          className="h-[230px] w-full object-cover"
          loading="lazy"
        />

        {/* Sello BEST SELLER */}
        {p.bestSeller && (
          <div className="absolute left-0 top-0">
            <img
              src="https://i.ibb.co/PhfQYt1/best-seller.png" // puedes cambiarlo por tu PNG transparente
              alt="Best Seller"
              className="w-[90px]"
            />
          </div>
        )}
      </div>

      {/* Nombre */}
      <h3 className="mt-3 text-sm font-semibold uppercase tracking-wide">
        {p.name}
      </h3>

      {/* Rating + Corazón */}
      <div className="mt-2 flex items-center justify-center gap-2">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} filled={i < (p.rating ?? 0)} />
          ))}
        </div>
        {/* Corazón */}
        <button type="button" aria-label="Agregar a favoritos" className="ml-2">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="#fff"
            strokeWidth="1.5"
          >
            <path d="M12.1 20.3l-1.1-1C6.1 15 3 12.2 3 8.8 3 6.2 5.1 4 7.8 4c1.4 0 2.8.6 3.7 1.7C12.4 4.6 13.8 4 15.2 4 17.9 4 20 6.2 20 8.8c0 3.4-3.1 6.2-8 10.5l-1.1 1z" />
          </svg>
        </button>
      </div>

      {/* Precio */}
      <p className="mt-2 text-[#ED5A87] text-lg font-bold">${p.price.toFixed(2)}</p>
    </article>
  );
}
