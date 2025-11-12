import { useState } from "react";
import { Search, Heart, ShoppingBag, User } from "lucide-react";
import logofndonegro1 from "../assets/logofndonegro1.png"; 

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [active, setActive] = useState("Lips");

  const menuItems = ["Eyes", "Brows", "Face", "Lips", "Skincare", "Hair"];

  return (
    <nav className="w-full text-white font-sans">

      <div className="bg-[#150010] text-sm text-center py-1">
        Hurry! Discounts You Don’t Want to Miss{" "}
        <span className="text-pink-400 underline cursor-pointer">
          Get Your Code
        </span>
      </div>

      <div className="bg-black flex justify-between items-center px-6 py-3 border-b border-gray-800">

        <div className="text-sm text-gray-300">
          United States | English
        </div>

        <div className="flex justify-center items-center">
          <img
            src={logofndonegro1}
            alt="Adhara’s Beauty"
            className="h-10 object-contain"
          />
        </div>

        <div className="flex items-center space-x-5">

          <button
            onClick={() => setShowSearch(!showSearch)}
            className="hover:text-pink-400 transition"
          >
            <Search size={20} />
          </button>

          <button className="hover:text-pink-400 transition">
            <Heart size={20} />
          </button>

          <button className="hover:text-pink-400 transition">
            <ShoppingBag size={20} />
          </button>

          <button className="flex items-center hover:text-pink-400 transition text-sm">
            <User size={18} className="mr-1" /> Sign in
          </button>
        </div>
      </div>

      {showSearch && (
        <div className="bg-black px-6 py-3 border-b border-gray-800 animate-fadeIn">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full p-2 bg-gray-900 text-white rounded-md outline-none placeholder-gray-400"
          />
        </div>
      )}

      <div className="bg-black flex justify-center space-x-10 py-2 border-b border-gray-800 relative">
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`relative pb-1 transition ${
              active === item ? "text-pink-400" : "text-white"
            } hover:text-pink-400`}
          >
            {item}
            {active === item && (
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-lineal-to-r from-blue-400 to-blue-600 rounded-full"></span>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}
