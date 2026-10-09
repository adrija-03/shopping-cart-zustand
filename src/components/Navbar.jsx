import { useCartStore } from "../store/useCartStore"

function Navbar({ manageCart }) {
    const cart = useCartStore((state) => state.cart)

    const totalItems = cart.reduce((total, item) =>
        total + item.quantity, 0)
    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                <div className="flex items-center gap-8">
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white font-black text-black group-hover:bg-zinc-200 transition-colors">
                            S
                        </div>
                        <span className="text-lg font-bold tracking-tight text-white">
                            MyStore<span className="text-emerald-400">.</span>
                        </span>
                    </a>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        aria-label="Shopping Cart"
                        className="relative flex h-9 items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-3.5 text-zinc-300 transition hover:border-zinc-700 hover:text-white active:scale-95"
                        onClick={manageCart}
                    >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>

                        <span className="text-xs font-semibold">Cart</span>

                        {totalItems > 0 && (
                            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-emerald-500 px-1 text-[10px] font-bold text-black shadow-lg shadow-emerald-500/20">
                                {totalItems}
                            </span>
                        )}
                    </button>
                </div>

            </div>
        </header>
    );
}

export default Navbar