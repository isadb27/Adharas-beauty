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
    <div>
      <h2>Carrito</h2>

      {items.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id}>
              <p>
                {item.name} x {item.quantity} = $
                {(item.price * item.quantity).toFixed(2)}
              </p>
              <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                -
              </button>
              <button onClick={() => dispatch(addToCart(item))}>+</button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Quitar
              </button>
            </div>
          ))}

          <p>Total: ${total.toFixed(2)}</p>

          <button onClick={() => dispatch(clearCart())}>
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;