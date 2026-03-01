import { create } from 'zustand';

const useCartStore = create((set) => ({
    cart: [],

    addToCarts: (product) => set((state) => ({
        cart: [...state.carts, product]
    })),

    removeFromCart: (productId) => set((state) => ({
        cart: state.cart.filter((item) => item.id != productId)
    })),

    clearCarts: () => set({ cart: [] }),
}));

export default useCartStore;