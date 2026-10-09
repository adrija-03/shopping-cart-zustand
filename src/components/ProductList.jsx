import { useEffect, useState } from "react";
import { products } from "../data/products"
import ProductCard from './ProductCard'

function ProductList() {
    const [productList, setProductList] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getProducts() {
            try {
                const data = await products();
                setProductList(data);
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false);
            }
        }
        getProducts();
    }, [])

    if (loading)
        return <p>Loading...</p>;

    if (error)
        return <p>{error}</p>;

    return (
        <section className="min-h-screen w-full bg-black px-4 py-8 sm:px-8 lg:px-12 overflow-x-hidden">
            {/* --- Full Width Container (No max-w restriction) --- */}
            <div className="w-full">

                {/* --- Page Header --- */}
                <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between border-b border-zinc-800/80 pb-5">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                            Featured Products
                        </h1>
                        <p className="mt-1 text-sm text-zinc-400">
                            Explore our curated collection of premium products.
                        </p>
                    </div>
                </div>

                {/* --- Empty State --- */}
                {!loading && !error && productList.length === 0 && (
                    <div className="my-24 flex flex-col items-center justify-center text-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900 text-zinc-500 mb-4">
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                            </svg>
                        </div>
                        <p className="text-base font-medium text-zinc-400">No products found</p>
                        <p className="mt-1 text-xs text-zinc-600">Check back later or try clearing filters.</p>
                    </div>
                )}

                {/* --- Full Width Dynamic Grid --- */}
                {!loading && !error && productList.length > 0 && (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                        {productList.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}

export default ProductList