import { useState } from "react";
import { useCart } from "../context/CartContext";


const PRODUCTS = [
  {
    id: "1",
    name: "Glossy Lip Kit",
    price: 25.99,
    image: "/lips/Rectangle56-12.png",
  },
  {
    id: "2",
    name: "Trendy Eyeshadow Palette",
    price: 39.99,
    image: "/lips/Rectangle56-1.png",
  },
  {
    id: "3",
    name: "Luminous Foundation",
    price: 29.99,
    image: "/lips/Rectangle56-5.png",
  },
  {
    id: "4",
    name: "Perfect Brush Set",
    price: 49.99,
    image: "/lips/Rectangle56-8.png",
  },
];

export default function Landing() {
  const [current, setCurrent] = useState(0);
  const { addToCart } = useCart();
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const banners = [
    "/banners/banner1.jpg",
    "/banners/banner2.jpg",
    "/banners/banner3.jpg",
  ];

  const nextBanner = () => setCurrent((prev) => (prev + 1) % banners.length);

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    setAddedItem(product.id);
    setTimeout(() => setAddedItem(null), 1500); 
  };

  return (
    <div className="bg-[#0B0B0C] text-white min-h-screen font-[Oswald]">
      <section className="relative w-full h-[400px] overflow-hidden">
        <img
          src={banners[current]}
          alt="Banner"
          className="w-full h-full object-cover transition-all duration-700"
        />
        <button
          onClick={nextBanner}
          className="absolute bottom-4 right-6 bg-[#ED5A87] text-black font-semibold px-4 py-2 rounded-lg"
        >
          Next
        </button>
      </section>
      <section className="px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Our Best Sellers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {PRODUCTS.map((p) => (
            <div
              key={p.id}
              className="bg-[#1a1a1a] rounded-2xl p-4 flex flex-col items-center hover:scale-105 transition relative"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-48 object-cover rounded-xl mb-3"
              />
              <h3 className="text-lg font-medium text-center">{p.name}</h3>
              <p className="text-[#ED5A87] font-bold">${p.price}</p>

              <button
                onClick={() => handleAddToCart(p)}
                className={`mt-3 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  addedItem === p.id
                    ? "bg-green-500 text-black scale-110"
                    : "bg-[#ED5A87] text-black hover:bg-pink-400"
                }`}
              >
                {addedItem === p.id ? "Added!" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="relative text-center py-16 bg-[#101010]">
        <h2 className="text-3xl font-bold text-[#ED5A87] mb-4">
          Embrace Your Beauty
        </h2>
        <p className="max-w-xl mx-auto text-gray-300 leading-relaxed">
          At Adharas Beauty, we believe beauty is for everyone. Our mission is
          to help you shine brighter every day with cruelty-free, high-quality
          products made with love.
        </p>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-2xl font-semibold">
          Over <span className="text-[#ED5A87] font-bold">5,000,000</span>{" "}
          Sales Worldwide!
        </h2>
        <p className="text-gray-400 mt-2">Join our global beauty community 🌍</p>
      </section>

      <footer className="bg-black py-10 px-6 grid md:grid-cols-3 gap-8 text-gray-400">
        <div>
          <h3 className="text-white font-bold mb-3">Customer Service</h3>
          <ul className="space-y-1">
            <li>Shipping & Returns</li>
            <li>Gift Cards</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-3">Our Brand</h3>
          <ul className="space-y-1">
            <li>About Adharas</li>
            <li>Join Our Team</li>
            <li>Press</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-3">Follow Us</h3>
          <ul className="space-y-1">
            <li>Instagram</li>
            <li>TikTok</li>
            <li>Facebook</li>
          </ul>
        </div>
        <p className="col-span-3 text-center mt-10 text-gray-600 text-sm">
          © 2025 Adharas Beauty — The Star Who Glows the Most ✨
        </p>
      </footer>
    </div>
  );
}
