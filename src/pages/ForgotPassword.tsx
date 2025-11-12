import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !newPassword) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      alert("No hay ninguna cuenta registrada");
      return;
    }

    const userData = JSON.parse(storedUser);

    if (email !== userData.email) {
      alert("El correo no coincide con ninguna cuenta registrada ❌");
      return;
    }

    userData.password = newPassword;
    localStorage.setItem("user", JSON.stringify(userData));

    alert("Contraseña cambiada exitosamente 💖");
    navigate("/");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 overflow-hidden">
      {/* Imagen */}
      <div className="w-full md:w-1/2 flex-shrink-0">
        <img
          src="/forgot-password-image.png"
          alt="Forgot Password"
          className="object-cover w-full h-64 md:h-screen"
        />
      </div>

      {/* Formulario */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-6 md:p-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center">
          RESET PASSWORD
        </h2>
        <form className="w-full max-w-xs md:max-w-sm space-y-4" onSubmit={handleReset}>
          <input
            type="email"
            placeholder="@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-full bg-pink-100 placeholder-gray-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-3 rounded-full bg-pink-100 placeholder-gray-500 focus:outline-none"
          />

          <div className="flex justify-between mt-6">
            <Link
              to="/"
              className="border border-pink-500 text-pink-500 py-2 px-6 rounded-full hover:bg-pink-50"
            >
              HOME
            </Link>
            <button
              type="submit"
              className="bg-pink-500 text-white py-2 px-6 rounded-full hover:bg-pink-600"
            >
              RESET
            </button>
          </div>
        </form>

        <p className="text-sm mt-4 text-gray-500 text-center">
          Remembered your password?{" "}
          <Link to="/" className="text-pink-500 hover:underline">
            Login ▲
          </Link>
        </p>
      </div>
    </div>
  );
}