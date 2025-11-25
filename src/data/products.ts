export type Product = {
  id: number;
  slug: string;
  name: string;
  price: string;
  image: string;
  category: string;
  bestSeller?: boolean;
  images?: string[];
  rating?: number;
  reviewsCount?: number;
  tones?: { name: string; hex: `#${string}` }[];
  details?: {
    description?: string;
    specs?: string;
    ingredients?: string;
    howTo?: string;
  };
};

export const PRODUCTS: Product[] = [

  {
    id: 1,
    slug: "anik-bonita-lip-gloss",
    name: "ANIK BONITA LIP GLOSS",
    price: "$25.00",
    image: "/Rectangle%2095.png",
    category: "lips",
    bestSeller: true,
    images: [
      "/Rectangle%2095.png",
      "/Rectangle%2098.png",
      "/Rectangle%20102.png",
      "/Rectangle%2096.png",
    ],
    rating: 5,
    reviewsCount: 502,
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

  {
    id: 2,
    slug: "trendy-chocolate-eyeshadows",
    name: "Trendy Chocolate Eyeshadows",
    price: "$30.00",
    image: "/trendy-chocolate.png",
    category: "eyes",
    bestSeller: true,
    images: [
      "/trendy-chocolate.png",
      "/trendy-chocolate-open.png",
      "/trendy-chocolate-swatches.png",
    ],
    rating: 5,
    reviewsCount: 389,
    tones: [
      { name: "Cacao", hex: "#5C3A21" },
      { name: "Truffle", hex: "#4B2C16" },
      { name: "Latte", hex: "#B68C6B" },
    ],
    details: {
      description:
        "Paleta de sombras con tonos cálidos y textura aterciopelada, inspirada en el chocolate.",
      specs:
        "Incluye 12 tonos mate y satinados · Alta pigmentación · Larga duración.",
      ingredients:
        "Talc, Mica, Dimethicone, Magnesium Stearate, Silica, Caprylic/Capric Triglyceride, Titanium Dioxide, Iron Oxides.",
      howTo:
        "Aplica los tonos más claros en el párpado y los más oscuros en la cuenca para dar profundidad.",
    },
  },

  {
    id: 3,
    slug: "glow-repair-hair-serum",
    name: "Glow Repair Hair Serum",
    price: "$40.00",
    image: "/hair-serum.png",
    category: "hair",
    bestSeller: false,
    images: ["/hair-serum.png", "/hair-serum-2.png"],
    rating: 4,
    reviewsCount: 212,
    details: {
      description:
        "Sérum reparador con aceites naturales que nutren el cabello dañado y aportan brillo inmediato.",
      specs:
        "Contenido 50 ml · Sin siliconas · Vegano · Apto para todo tipo de cabello.",
      ingredients:
        "Argan Oil, Jojoba Oil, Vitamin E, Fragrance, Limonene, Linalool.",
      howTo:
        "Aplica 2-3 gotas en el largo y puntas del cabello húmedo o seco. No enjuagar.",
    },
  },

  {
    id: 4,
    slug: "pure-balance-skin-cream",
    name: "Pure Balance Skin Cream",
    price: "$35.00",
    image: "/skin-cream.png",
    category: "skin",
    bestSeller: false,
    rating: 5,
    reviewsCount: 178,
    images: ["/skin-cream.png", "/skin-cream-open.png"],
    details: {
      description:
        "Crema facial hidratante con extractos naturales para equilibrar y suavizar la piel.",
      specs:
        "Contenido 100 ml · Sin fragancia · Dermatológicamente probada · Vegana.",
      ingredients:
        "Aqua, Glycerin, Butyrospermum Parkii Butter, Cetearyl Alcohol, Sodium Hyaluronate.",
      howTo:
        "Aplicar por la mañana y noche sobre rostro limpio, masajeando suavemente hasta su completa absorción.",
    },
  },
];
