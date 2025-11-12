import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../pages/Footer"; 

export default function AddProduct() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [details, setDetails] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (!productName || !price || !details) {
      alert("Por favor, llena todos los campos 💅");
      return;
    }

    const newProduct = { productName, price, details };
    const existingProducts = JSON.parse(localStorage.getItem("products") || "[]");

    localStorage.setItem("products", JSON.stringify([...existingProducts, newProduct]));
    alert("Producto agregado correctamente 💖");

    setProductName("");
    setPrice("");
    setDetails("");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row flex-grow">
        {/* Imagen del lado izquierdo */}
        <div className="md:w-1/2 flex items-center justify-center bg-pink-300">
          <span className="text-pink-200 text-[200px] md:text-[250px] font-thin">+</span>
        </div>

        {/* Formulario del lado derecho */}
        <div className="md:w-1/2 flex flex-col justify-center items-center p-8 bg-gray-200">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 tracking-wide">
            PRODUCT INFO
          </h2>

          <form
            className="w-full max-w-sm space-y-4 flex flex-col items-center"
            onSubmit={handleAdd}
          >
            <input
              type="text"
              placeholder="product name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full p-3 rounded-full bg-pink-100 placeholder-pink-300 focus:outline-none text-gray-700"
            />

            <input
              type="text"
              placeholder="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-3 rounded-full bg-pink-100 placeholder-pink-300 focus:outline-none text-gray-700"
            />

            <textarea
              placeholder="details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full p-3 rounded-2xl bg-pink-100 placeholder-pink-300 focus:outline-none text-gray-700 h-32 resize-none"
            ></textarea>

            <div className="flex justify-between w-full mt-6 space-x-2">
              <Link
                to="/"
                className="border border-pink-500 text-pink-500 py-2 px-6 rounded-md hover:bg-pink-50 transition-colors"
              >
                HOME
              </Link>

              <button
                type="submit"
                className="border border-gray-800 text-gray-800 py-2 px-6 rounded-md hover:bg-gray-100 transition-colors"
              >
                ADD
              </button>

              <button
                type="button"
                onClick={() => {
                  setProductName("");
                  setPrice("");
                  setDetails("");
                }}
                className="bg-pink-500 text-white py-2 px-6 rounded-md hover:bg-pink-600 transition-colors"
              >
                NEW
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
