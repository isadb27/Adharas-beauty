import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { updateUser } from "../store/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { logoutUser } from "../store/authSlice";

export default function ClientProfile() {
  const user = useSelector((state: RootState) => state.user);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (field: string, value: string) => {
    dispatch(updateUser({ [field]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      dispatch(updateUser({ image: reader.result as string }));
    };
    reader.readAsDataURL(file);
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  const handleLogout = () => {
    dispatch(logoutUser()); // limpia usuario de authSlice
    navigate("/");          // redirige al inicio
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-200 text-black">

      <Navbar />

      <div className="flex flex-col md:flex-row flex-grow">

        <div className="md:w-1/2 bg-pink-400 flex flex-col items-center justify-center p-10">
          {user.image ? (
            <img
              src={user.image}
              alt="Profile"
              className="w-64 h-64 rounded-full object-cover shadow-lg"
            />
          ) : (
            <div className="text-pink-200 text-[250px] md:text-[300px] font-thin select-none">
              ⭘
            </div>
          )}

          <button
            onClick={triggerUpload}
            className="mt-6 bg-white text-pink-600 font-semibold px-6 py-2 rounded-full shadow hover:bg-pink-50 transition"
          >
            Upload photo
          </button>

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>

        <div className="md:w-1/2 p-10 flex flex-col">
          <h2 className="text-4xl font-bold tracking-wide mb-6">USER INFO</h2>

          <div className="flex flex-col space-y-4 w-full max-w-md">

            <input
              type="text"
              value={user.name}
              placeholder="Name"
              onChange={(e) => handleChange("name", e.target.value)}
              className="p-3 rounded-full bg-pink-100 placeholder-gray-400 text-gray-700"
            />

            <input
              type="email"
              value={user.email}
              placeholder="Email"
              onChange={(e) => handleChange("email", e.target.value)}
              className="p-3 rounded-full bg-pink-100 placeholder-gray-400 text-gray-700"
            />

            <input
              type="text"
              value={user.address}
              placeholder="Address"
              onChange={(e) => handleChange("address", e.target.value)}
              className="p-3 rounded-full bg-pink-100 placeholder-gray-400 text-gray-700"
            />

            <input
              type="text"
              value={user.payment}
              placeholder="Payment"
              onChange={(e) => handleChange("payment", e.target.value)}
              className="p-3 rounded-full bg-pink-100 placeholder-gray-400 text-gray-700"
            />
          </div>

          {/* BOTONES */}
          <div className="flex space-x-4 mt-8">
            <Link
              to="/home"
              className="border border-pink-500 text-pink-500 py-2 px-6 rounded-md hover:bg-pink-50 transition"
            >
              HOME
            </Link>

            <Link
              to="/cart"
              className="border border-black text-black py-2 px-6 rounded-md hover:bg-gray-100 transition"
            >
              CART
            </Link>

            <Link
              to="/favorites"
              className="bg-pink-500 text-white py-2 px-6 rounded-md hover:bg-pink-600 transition"
            >
              FAVORITES
            </Link>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition"
            >
              LOGOUT
            </button>
          </div>
        </div>
      </div>

      <div className="px-10 py-12">
        <h2 className="text-3xl font-bold tracking-wide mb-8">YOUR CART</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-lg col-span-4">
              Your cart is empty
            </p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white h-[250px] shadow-md rounded-xl p-4 flex flex-col"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-32 object-cover rounded-md"
                />

                <h3 className="font-semibold mt-2">{item.name}</h3>
                <p className="text-gray-600 text-sm">${item.price}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
            ))
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
