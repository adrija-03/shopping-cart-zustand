import { useCartStore } from "./useCartStore";

function Cart() {
    const cart = useCartStore((state) => state.cart);
    const removeFromCart = useCartStore((state) => state.removeFromCart);

    return (
        <div>
            {cart.map((item) => (
                <div key={item.id}>
                    <span>{item.name}</span>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
            ))}
        </div>
    )
}

export default Cart