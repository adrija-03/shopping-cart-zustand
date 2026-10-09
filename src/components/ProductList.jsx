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
        <section className="min-h-screen bg-black px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">

                <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between border-b border-zinc-800 pb-5">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                            Featured Products
                        </h1>
                        <p className="mt-1 text-sm text-zinc-400">
                            Explore our curated collection of premium products.
                        </p>
                    </div>

                    {!loading && !error && (
                        <span className="text-xs font-medium text-zinc-500">
                            Showing {productList.length} products
                        </span>
                    )}
                </div>

                {/* --- Empty State --- */}
                {!loading && !error && productList.length === 0 && (
                    <div className="my-16 text-center text-zinc-500">
                        No products found.
                    </div>
                )}

                {!loading && !error && productList.length > 0 && (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
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