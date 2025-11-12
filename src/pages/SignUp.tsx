import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 🔴 Nueva validación de campos vacíos
    if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      alert("Por favor llena todos los campos ✨");
      return;
    }

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden ❌");
      return;
    }

    // Guardar datos en localStorage
    const userData = { name, email, password };
    localStorage.setItem("user", JSON.stringify(userData));

    alert("Cuenta creada correctamente 💅");
    navigate("/"); // temporal hasta que suban la landing
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 overflow-hidden">
      {/* Formulario */}
      <div className="md:w-1/2 flex flex-col justify-center items-center p-6 md:p-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-800">
          SIGN ME IN
        </h2>

        <form className="w-full max-w-sm space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="How should we call you?"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-full bg-pink-100 placeholder-gray-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-full bg-pink-100 placeholder-gray-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-full bg-pink-100 placeholder-gray-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-3 rounded-full bg-pink-100 placeholder-gray-500 focus:outline-none"
          />

          <div className="flex justify-between mt-6">
            <Link
              to="/"
              className="border border-pink-500 text-pink-500 py-2 px-6 rounded-full hover:bg-pink-50 text-sm"
            >
              HOME
            </Link>
            <button
              type="submit"
              className="bg-pink-500 text-white py-2 px-6 rounded-full hover:bg-pink-600 text-sm"
            >
              SIGN UP
            </button>
          </div>
        </form>

        <p className="text-sm mt-4 text-gray-500">
          are you already part of the team?!{" "}
          <Link to="/" className="text-pink-500 hover:underline">
            login ▲
          </Link>
        </p>
      </div>

      {/* Imagen a la derecha */}
      <div className="md:w-1/2 flex items-center justify-center bg-white">
        <img
          src="/signup-image.png"
          alt="Adhara's Beauty"
          className="object-cover w-full h-64 md:h-screen"
        />
      </div>
    </div>
  );
}