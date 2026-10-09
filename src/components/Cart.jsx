import { useCartStore } from "../store/useCartStore";
import CartItem from "./CartItem";

function Cart() {
const cart = useCartStore((state) => state.cart);
const clearCart = useCartStore((state) => state.clearCart);

const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
);

if (cart.length === 0) {
    return (
        <div>
            <h2>Your Cart</h2>
            <p>Your cart is empty.</p>
        </div>
    );
}

return (
    <section>
        <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Your Cart</h2>

            <button
                onClick={clearCart}
                className="text-red-500"
            >
                Clear Cart
            </button>
        </div>

        <div className="flex flex-col gap-4">
            {cart.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}
        </div>

        <div className="mt-6 text-right">
            <h3 className="text-xl font-bold">
                Total: ₹{totalPrice.toFixed(2)}
            </h3>
        </div>
    </section>
);

}

export default Cart;
