import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  removeFromCart,
  decreaseQuantity,
  addToCart,
  clearCart,
} from "../store/cartSlice";

const Cart = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);

  const total = items.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  return (
    <div className="max-w-3xl mx-auto py-16 px-6 text-white">
      <h1 className="text-3xl font-bold mb-6">🛒 Tu Carrito</h1>

      {items.length === 0 ? (
        <p className="text-gray-400 text-lg">Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-gray-900 p-4 rounded-lg"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-400">
                    ${item.price} x {item.quantity}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    className="px-3 py-1 bg-gray-700 rounded"
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    className="px-3 py-1 bg-gray-700 rounded"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    +
                  </button>

                  <button
                    className="px-3 py-1 bg-red-600 rounded"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Quitar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-right text-xl font-bold">
            Total: ${total.toFixed(2)}
          </div>

          <button
            onClick={() => dispatch(clearCart())}
            className="mt-4 w-full bg-pink-500 hover:bg-pink-400 text-black font-bold py-3 rounded-lg"
          >
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
