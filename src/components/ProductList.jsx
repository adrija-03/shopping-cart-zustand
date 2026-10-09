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
        <div>
            <div>Product List</div>
            <div>
                {productList.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product} />
                ))}
            </div>

        </div>
    )
}

export default ProductList