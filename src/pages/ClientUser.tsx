import { useState, useEffect } from "react";

export default function ClientUser() {
  const [user, setUser] = useState<{
    name: string;
    email: string;
    address: string;
    payment: string;
    role: string;
  } | null>(null);

  const [image, setImage] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  // Campos del formulario
  const [editData, setEditData] = useState({
    name: "",
    email: "",
    address: "",
    payment: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) {
      const parsed = JSON.parse(saved);
      setUser(parsed);

      // llenar los campos del formulario
      setEditData({
        name: parsed.name || "",
        email: parsed.email || "",
        address: parsed.address || "",
        payment: parsed.payment || "",
      });
    }

    const savedImg = localStorage.getItem("userImage");
    if (savedImg) setImage(savedImg);
  }, []);

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

  const handleSave = () => {
    if (!user) return;

    const updatedUser = { ...user, ...editData };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));

    setIsEditing(false);
  };

  if (!user) {
    return <div className="p-10 text-center text-white">No profile data found.</div>;
  }

  return (
    <div className="p-10 flex flex-col items-center text-white">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>

      <div className="flex flex-col items-center space-y-4">

        <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-700">
          {image ? (
            <img src={image} alt="profile" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-300">
              No photo
            </div>
          )}
        </div>

        <label className="cursor-pointer bg-pink-500 px-4 py-2 rounded-full text-white hover:bg-pink-600">
          Upload Photo
          <input type="file" className="hidden" onChange={handleImage} />
        </label>

        <p className="text-xl">{user.name}</p>
        <p className="text-gray-400">{user.email}</p>
        <p className="text-pink-400">{user.role}</p>

        <button
          onClick={() => setIsEditing(true)}
          className="mt-4 bg-purple-600 px-5 py-2 rounded-full hover:bg-purple-700 transition"
        >
          Edit Profile
        </button>
      </div>

      {/* Modal de Edición */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center px-4">
          <div className="bg-gray-900 p-6 rounded-xl w-full max-w-md space-y-4 shadow-lg border border-gray-700">

            <h2 className="text-2xl font-bold text-center mb-4">Edit Profile</h2>

            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 bg-gray-800 text-white rounded"
              value={editData.name}
              onChange={(e) => setEditData({ ...editData, name: e.target.value })}
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 bg-gray-800 text-white rounded"
              value={editData.email}
              onChange={(e) => setEditData({ ...editData, email: e.target.value })}
            />

            <input
              type="text"
              placeholder="Address"
              className="w-full p-2 bg-gray-800 text-white rounded"
              value={editData.address}
              onChange={(e) => setEditData({ ...editData, address: e.target.value })}
            />

            <input
              type="text"
              placeholder="Payment method"
              className="w-full p-2 bg-gray-800 text-white rounded"
              value={editData.payment}
              onChange={(e) => setEditData({ ...editData, payment: e.target.value })}
            />

            <div className="flex justify-between mt-4">
              <button
                className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-700"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>

              <button
                className="bg-pink-500 px-4 py-2 rounded hover:bg-pink-600"
                onClick={handleSave}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
