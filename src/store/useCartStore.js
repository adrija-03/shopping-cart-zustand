import { create } from "zustand";

export const useCartStore = create((set) => ({
    cart: [],
    increaseQuantity: (product) => {
        set((state) => {
            const existingItem = state.cart.find(
                (item) => item.id === product.id
            );

            if (existingItem) {
                return {
                    cart: state.cart.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            }

            return {
                cart: [...state.cart, { ...product, quantity: 1 }]
            }
        });
    },
    decreaseQuantity: (id) => {
        set((state) => ({
            cart: state.cart.map((item) =>
                item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)
        }))
    },
    removeFromCart: (id) => {
        set((state) => ({
            cart: state.cart.filter((item) => item.id !== id),
        }));
    },
    clearCart: () => {
        set({
            cart: [],
        });
    },
}))