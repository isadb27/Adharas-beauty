export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;

  // extras opcionales para el detalle
  slug?: string;
  images?: string[];
  rating?: number;
  reviewsCount?: number;
  bestSeller?: boolean;
  tones?: { name: string; hex: `#${string}` }[];
  details?: {
    description?: string;
    specs?: string;
    ingredients?: string;
    howTo?: string;
  };
};

/* 🔥 SI NO VES EL GRID, MIRA ESTE ARRAY.
   Debe tener AL MENOS 1 producto.  */
export const PRODUCTS: Product[] = [
  {
    id: "anik-bonita-lip-gloss",
    slug: "anik-bonita-lip-gloss",
    name: "ANIK BONITA LIP GLOSS",
    price: 25.0,
    // Usa EXACTAMENTE tus archivos de /public (con %20 por espacio)
    image: "/Rectangle%2095.png",
    images: [
      "/Rectangle%2095.png",
      "/Rectangle%2098.png",
      "/Rectangle%20102.png",
      "/Rectangle%2096.png",
    ],
    rating: 5,
    reviewsCount: 502,
    bestSeller: true,
    tones: [
      { name: "Crystal", hex: "#FFFFFF" },
      { name: "Nude Rose", hex: "#E8C8C6" },
      { name: "Petal Pink", hex: "#E9B7BE" },
      { name: "Berry", hex: "#B31A38" },
    ],
    details: {
      description:
        "Gloss de alto brillo y textura ligera (no pegajoso). Realza el color natural con efecto juicy.",
      specs:
        "Contenido 4.5 ml · Acabado brillante · Aroma suave vainilla · Vegano · Cruelty-free.",
      ingredients:
        "Hydrogenated Polyisobutene, Diisostearyl Malate, Silica Dimethyl Silylate, Flavor, Tocopheryl Acetate, +/- CI 16035, CI 77491.",
      howTo:
        "Aplica en labio desnudo o sobre labial. Para volumen, concentra al centro.",
    },
  },
  // 👉 si quieres, agrega aquí más productos. Mantén ‘id’, ‘name’, ‘price’, ‘image’.
];
