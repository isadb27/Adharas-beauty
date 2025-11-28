import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadProductsByCategory } from "../store/productsSlice";
import type { RootState, AppDispatch } from "../store/store";

export default function ProductDetail() {
  const { slug } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const { products, loading } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    if (products.length === 0) {
      dispatch(loadProductsByCategory("all"));
    }
  }, [dispatch, products.length]);

  const product = products.find((p) => String(p.id) === String(slug));

  if (loading && products.length === 0) {
    return <div className="text-white p-10">Cargando producto...</div>;
  }

  if (!product) {
    console.log("Producto no encontrado:", slug, products);
    return <div className="text-red-500 p-10">Producto no encontrado</div>;
  }

  return (
    <div className="text-white px-8 py-16 flex flex-col md:flex-row justify-center items-start gap-16">

      {/* -------- IMAGEN GRANDE -------- */}
      <img
        src={product.main_imagen_url ?? ""}
        alt={product.name}
        className="rounded-2xl w-[420px] h-auto object-cover border border-neutral-800 shadow-lg"
      />

      {/* -------- INFO -------- */}
      <div className="flex flex-col gap-6 max-w-xl">

        <h1 className="text-4xl font-bold leading-tight">
          {product.name}
        </h1>

        <p className="text-2xl text-gray-300">
          ${Number(product.price)}
        </p>

        <button
          className="px-10 py-3 bg-pink-500 hover:bg-pink-600 text-black font-semibold rounded-lg transition w-fit"
        >
          Add to Cart
        </button>

        <p className="text-gray-300 leading-relaxed text-lg">
          {product.description}
        </p>
      </div>

    </div>
  );
}
