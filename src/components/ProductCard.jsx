import { useCartStore } from "../store/useCartStore"

function ProductCard({ product }) {

    const increaseQuantity = useCartStore(
        (state) => state.increaseQuantity
    );

    const decreaseQuantity = useCartStore(
        (state) => state.decreaseQuantity
    )

    const removeFromCart = useCartStore(
        (state) => state.removeFromCart
    )

    const cartItem = useCartStore((state) =>
        state.cart.find((item) => item.id === product.id)
    );

    const quantity = cartItem?.quantity ?? 0;
    return (
        <div className="flex flex-col rounded-2xl border border-zinc-800 bg-black p-5 text-white">
            <div className="flex items-start justify-between">
                <div className="flex gap-4">
                    <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-white p-2">
                        <img 
                        src={product.thumbnail} 
                        alt={product.title}
                        className="h-full w-full object-contain" />
                    </div>
                    <div className="flex flex-col justify-between py-0.5">
                        <div>
                            <div className="text-lg font-semibold text-white">{product.title}</div>
                            <div className="mt-0.5 text-sm text-zinc-400">₹{product.price} each</div>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 transition hover:border-zinc-700 hover:text-white"
                                onClick={() => decreaseQuantity(product.id)}
                            >-</button>
                            <span className="text-sm font-medium text-white">{quantity}</span>
                            <button
                                className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 transition hover:border-zinc-700 hover:text-white"
                                onClick={() => increaseQuantity(product)}
                            >+</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-end justify-between self-stretch py-0.5">
                    <div className="text-lg font-bold text-white">{product.price * quantity}</div>
                    <button
                        className="text-sm text-red-500 hover:underline"
                        onClick={() => removeFromCart(product.id)}
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard