import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from "../store/cartSlice";

export default function ClientUser() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector((state) => state.cart.items);
  const total = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    payment: "",
  });

  const [image, setImage] = useState<string | null>(null);
  const fileInput = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) setUser(JSON.parse(saved));

    const savedImg = localStorage.getItem("userImage");
    if (savedImg) setImage(savedImg);
  }, []);

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(user));
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUpload = () => fileInput.current?.click();

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result as string);
      localStorage.setItem("userImage", reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="w-full bg-[#d9d9d9] text-black p-10 flex flex-col">

      <div className="flex w-full">

        <div className="w-1/2 bg-[#f06aa7] flex flex-col items-center justify-center p-10 relative">
          <div className="w-[250px] h-[250px] bg-pink-300 rounded-full overflow-hidden">
            {image ? (
              <img src={image} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white text-xl">
                No photo
              </div>
            )}
          </div>

          <button
            onClick={handleUpload}
            className="mt-6 bg-white text-pink-600 px-5 py-2 rounded-full font-semibold hover:bg-gray-100"
          >
            Upload Photo
          </button>

          <input type="file" ref={fileInput} className="hidden" onChange={handleImage} />
        </div>

        <div className="w-1/2 flex flex-col p-16 space-y-6">
          <h1 className="text-4xl font-bold tracking-widest mb-3">USER INFO</h1>

          <input
            name="name"
            disabled={!isEditing}
            value={user.name}
            onChange={handleChange}
            className="w-[80%] px-5 py-3 rounded-full bg-white disabled:bg-[#e6e6e6]"
            placeholder="name"
          />

          <input
            name="email"
            disabled={!isEditing}
            value={user.email}
            onChange={handleChange}
            className="w-[80%] px-5 py-3 rounded-full bg-white disabled:bg-[#e6e6e6]"
            placeholder="email"
          />

          <input
            name="address"
            disabled={!isEditing}
            value={user.address}
            onChange={handleChange}
            className="w-[80%] px-5 py-3 rounded-full bg-white disabled:bg-[#e6e6e6]"
            placeholder="add address"
          />

          <input
            name="payment"
            disabled={!isEditing}
            value={user.payment}
            onChange={handleChange}
            className="w-[80%] px-5 py-3 rounded-full bg-white disabled:bg-[#e6e6e6]"
            placeholder="add payment"
          />

          {isEditing ? (
            <button
              onClick={handleSave}
              className="w-[200px] mt-3 bg-purple-600 text-white py-3 rounded-full"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="w-[200px] mt-3 bg-purple-600 text-white py-3 rounded-full"
            >
              Edit Profile
            </button>
          )}

          <div className="flex space-x-4 mt-5">
            <button
              onClick={() => navigate("/home")}
              className="border-2 border-black px-6 py-2 rounded-full"
            >
              HOME
            </button>

            <button
              onClick={() => navigate("/cart")}
              className="border-2 border-black px-6 py-2 rounded-full"
            >
              CART
            </button>

            <button
              onClick={() => navigate("/favorites")}
              className="bg-[#ff3796] text-white px-6 py-2 rounded-full"
            >
              FAVORITES
            </button>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold text-black mb-8">YOUR CART</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-lg">No items in your cart.</p>
        ) : (
          <div className="grid grid-cols-2 gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-xl shadow-md flex flex-col"
              >
                <p className="font-bold text-lg">{item.name}</p>
                <p className="text-gray-500">${item.price}</p>

                <div className="flex items-center gap-3 mt-4">
                  <button
                    className="px-3 py-1 bg-gray-300 rounded"
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    className="px-3 py-1 bg-gray-300 rounded"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="mt-4 bg-red-500 text-white py-2 rounded-full"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 text-2xl font-bold">
          TOTAL: ${total.toFixed(2)}
        </div>
      </div>
    </div>
  );
}
