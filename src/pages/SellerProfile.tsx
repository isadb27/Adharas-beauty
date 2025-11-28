import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { logoutUser, updateUserImage } from "../store/authSlice";

export default function SellerProfile() {
  const user = useSelector((state: RootState) => state.auth.user);
  const products = useSelector((state: RootState) => state.product.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<string | null>(user?.image || null);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");

  if (!user || user.role !== "seller") {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold">You are not allowed here</h2>
        <Link to="/" className="text-pink-500 underline">Go Home</Link>
      </div>
    );
  }

  const handleUpload = () => fileInputRef.current?.click();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result as string);
      dispatch(updateUserImage(reader.result as string)); // guarda en Redux
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    // Si quieres, puedes agregar acción para guardar cambios en Redux o backend
    setIsEditing(false);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/"); // redirige al inicio
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-200 text-black p-10">

      {/* PERFIL */}
      <div className="flex flex-col md:flex-row flex-grow">

        {/* FOTO */}
        <div className="md:w-1/2 bg-pink-400 flex flex-col items-center justify-center p-10">
          <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
            {image ? (
              <img src={image} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white text-6xl font-thin">
                ⭘
              </div>
            )}
          </div>

          <button
            onClick={handleUpload}
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

        {/* INFO */}
        <div className="md:w-1/2 p-10 flex flex-col">
          <h2 className="text-4xl font-bold tracking-wide mb-6">SELLER INFO</h2>

          <div className="flex flex-col space-y-4 w-full max-w-md">
            <input
              type="text"
              value={name}
              disabled={!isEditing}
              onChange={(e) => setName(e.target.value)}
              className={`p-3 rounded-full ${isEditing ? "bg-white" : "bg-pink-100"} placeholder-gray-400 text-gray-700`}
            />

            <input
              type="email"
              value={email}
              disabled={!isEditing}
              onChange={(e) => setEmail(e.target.value)}
              className={`p-3 rounded-full ${isEditing ? "bg-white" : "bg-pink-100"} placeholder-gray-400 text-gray-700`}
            />

            <input
              type="text"
              value="Seller"
              disabled
              className="p-3 rounded-full bg-pink-100 placeholder-gray-400 text-gray-700"
            />
          </div>

          {/* Botones de acción */}
          <div className="flex space-x-4 mt-8">
            {isEditing ? (
              <button
                onClick={handleSave}
                className="bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700 transition"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700 transition"
              >
                Edit Profile
              </button>
            )}

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>

          <div className="flex space-x-4 mt-5">
            <Link
              to="/home"
              className="border border-pink-500 text-pink-500 py-2 px-6 rounded-md hover:bg-pink-50 transition"
            >
              HOME
            </Link>

            <Link
              to="/add-product"
              className="bg-pink-500 text-white py-2 px-6 rounded-md hover:bg-pink-600 transition"
            >
              UPLOAD PRODUCT
            </Link>
          </div>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-black mb-8">YOUR PRODUCTS</h2>

        {products.length === 0 ? (
          <p className="text-gray-500 text-lg">You haven't uploaded any products yet.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <div
                key={p.id}
                className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center"
              >
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.productName}
                    className="w-full h-32 object-cover rounded-md mb-3"
                  />
                )}
                <h3 className="font-semibold text-lg">{p.productName}</h3>
                <p className="text-gray-600 text-sm">${p.price}</p>
                <p className="text-gray-500 mt-2 text-sm">{p.details}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
