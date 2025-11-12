import { useEffect, useState } from "react";

const slides = [
  { src: "/banner azul.png", href: "/promo" },
  { src: "/bannerfucsia.png", href: "/collection" },
  { src: "/bannerrojo.png", href: "/lips" },
];

export default function BannerCarousel() {
  const [current, setCurrent] = useState(0);

  // Cambiar imagen cada 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-lg mt-8">
      {/* contenedor con tamaño fijo y centrado */}
      <div className="relative w-full h-[400px] md:h-[480px] lg:h-[520px]">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.src}
            alt={`banner ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}

        {/* Botón “See more” */}
        <a
          href={slides[current].href}
          className="absolute bottom-5 right-6 bg-white/80 text-black font-semibold rounded-full px-6 py-2 shadow-md hover:bg-[#ED5A87] hover:text-white transition"
        >
          See more
        </a>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Ir al banner ${index + 1}`}
              className={`h-3 w-3 rounded-full ${
                index === current
                  ? "bg-white"
                  : "bg-white/50 hover:bg-white/80 transition"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
