import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Heart, ShoppingBag, User } from "lucide-react";
import logofndonegro1 from "../assets/logofndonegro1.png"; 

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Eyes", path: "/eyes" },
    { name: "Brows", path: "/brows" },
    { name: "Face", path: "/face" },
    { name: "Lips", path: "/lips" },
    { name: "Skincare", path: "/skincare" },
    { name: "Hair", path: "/hair" },
  ];

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

          <Link
            to="/"
            className="flex items-center hover:text-pink-400 transition text-sm"
          >
            <User size={18} className="mr-1" /> Sign in
          </Link>
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
          <Link
            key={item.path}
            to={item.path}
            className={`relative pb-1 transition ${
              location.pathname === item.path
                ? "text-pink-400"
                : "text-white hover:text-pink-400"
            }`}
          >
            {item.name}
            {location.pathname === item.path && (
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></span>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
}
