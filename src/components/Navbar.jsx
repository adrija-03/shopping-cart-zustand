import { useCartStore } from "../store/useCartStore"

function Navbar() {
    const cart = useCartStore((state) => state.cart)
    return (
        <nav>
            Cart: {cart.length}
        </nav>
    );
}

export default Navbar