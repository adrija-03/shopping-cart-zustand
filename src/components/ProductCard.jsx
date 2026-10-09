import { useCartStore } from "../store/useCartStore"

function ProductCard({ product }) {

    const increaseQuantity = useCartStore(
        (state) => state.increaseQuantity
    );

return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/60 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-xl hover:shadow-emerald-500/5">
      
      <div className="relative aspect-square w-full overflow-hidden bg-zinc-900/50 p-6 flex items-center justify-center">

        {/* Wishlist Button */}
        {/* <button
          type="button"
          aria-label="Add to wishlist"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950/80 text-zinc-400 backdrop-blur-md transition-colors hover:border-zinc-700 hover:text-rose-500"
        >
          <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button> */}

        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          
          <div className="mb-1.5 flex items-center justify-between text-xs text-zinc-400">
            <span className="uppercase tracking-wider text-zinc-500 font-medium">
              {product.category || "General"}
            </span>
            
            {product.rating && (
              <div className="flex items-center gap-1 text-amber-400">
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-semibold">{product.rating}</span>
              </div>
            )}
          </div>

          <h3 className="line-clamp-2 text-base font-semibold text-zinc-100 group-hover:text-white">
            {product.title}
          </h3>
        </div>

        <div className="mt-4 pt-3 border-t border-zinc-800/60 flex flex-col gap-3">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-white">
              ₹{product.price}
            </span>
          </div>

          <button
            onClick={() => increaseQuantity(product)}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition-all hover:bg-zinc-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Add to cart
          </button>

        </div>
      </div>

    </div>
  );
}

export default ProductCard