import { useCartStore } from "../store/useCartStore"

function Navbar() {
    const cart = useCartStore((state) => state.cart)

    const totalItems = cart.reduce((total, item) =>
        total + item.quantity, 0)
    return (
        <nav>
            <h1>My Store</h1>
            <div>Cart: {totalItems}</div>
        </nav>
    );
}

export default Navbar