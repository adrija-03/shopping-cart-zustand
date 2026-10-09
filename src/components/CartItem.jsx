import { useCartStore } from "../store/useCartStore";

function CartItem({ item }) {
    
const increaseQuantity = useCartStore(
(state) => state.increaseQuantity
);

const decreaseQuantity = useCartStore(
    (state) => state.decreaseQuantity
);

const removeFromCart = useCartStore(
    (state) => state.removeFromCart
);

return (
    <div className="flex items-center justify-between gap-4 rounded-xl border p-4">
        <div className="flex items-center gap-4">
            <img
                src={item.thumbnail}
                alt={item.title}
                className="h-20 w-20 object-contain"
            />

            <div>
                <h3 className="font-semibold">
                    {item.title}
                </h3>

                <p>₹{item.price} each</p>

                <div className="mt-2 flex items-center gap-3">
                    <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 transition hover:border-zinc-700 hover:text-white"
                    >
                        -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                        onClick={() => increaseQuantity(item)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 transition hover:border-zinc-700 hover:text-white"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>

        <div className="text-right">
            <p className="font-semibold">
                ₹{(item.price * item.quantity).toFixed(2)}
            </p>

            <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500"
            >
                Remove
            </button>
        </div>
    </div>
);

}

export default CartItem;
