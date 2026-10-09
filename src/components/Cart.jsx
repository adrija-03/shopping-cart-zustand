import { useCartStore } from "../store/useCartStore";
import CartItem from "./CartItem";

function Cart({ isOpen, onClose }) {
    const cart = useCartStore((state) => state.cart);
    const clearCart = useCartStore((state) => state.clearCart);

    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
    
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-hidden">
            <div
                onClick={onClose}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            />

            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
                <div className="flex w-screen max-w-md flex-col border-l border-zinc-800/80 bg-zinc-950 p-6 text-white shadow-2xl">

                    <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                        <div className="flex items-center gap-3">
                            <h2 className="text-xl font-bold tracking-tight text-white">Your Cart</h2>
                            {cart.length > 0 && (
                                <span className="rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs font-semibold text-zinc-300">
                                    {cart.length} {cart.length === 1 ? "item" : "items"}
                                </span>
                            )}
                        </div>

                        <div className="flex items-center gap-3">
                            {cart.length > 0 && (
                                <button
                                    onClick={clearCart}
                                    className="text-xs font-medium text-rose-400 transition hover:text-rose-300 hover:underline"
                                >
                                    Clear Cart
                                </button>
                            )}
                            <button
                                onClick={onClose}
                                aria-label="Close cart"
                                className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 transition hover:border-zinc-700 hover:bg-zinc-900 hover:text-white"
                            >
                                ✕
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto py-6 pr-1">
                        {cart.length === 0 ? (
                            <div className="flex h-full flex-col items-center justify-center text-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-500 mb-4">
                                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                </div>
                                <h3 className="text-base font-semibold text-zinc-200">Your cart is empty</h3>
                                <p className="mt-1 text-xs text-zinc-500 max-w-[200px]">
                                    Looks like you haven't added any products to your cart yet.
                                </p>
                                <button
                                    onClick={onClose}
                                    className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-zinc-800"
                                >
                                    Continue Shopping
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-4">
                                {cart.map((item) => (
                                    <CartItem key={item.id} item={item} />
                                ))}
                            </div>
                        )}
                    </div>

                    {cart.length > 0 && (
                        <div className="border-t border-zinc-800 pt-5 mt-auto">
                            <div className="flex flex-col gap-2 text-sm text-zinc-400 mb-4">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span className="font-medium text-zinc-200">₹{totalPrice.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span className="text-emerald-400 text-xs font-medium">Calculated at checkout</span>
                                </div>
                                <div className="mt-2 flex justify-between border-t border-zinc-800/80 pt-3 text-base font-bold text-white">
                                    <span>Total</span>
                                    <span className="text-lg text-emerald-400">₹{totalPrice.toFixed(2)}</span>
                                </div>
                            </div>

                            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-bold text-black transition hover:bg-zinc-200 active:scale-[0.98]">
                                Proceed to Checkout
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default Cart;
