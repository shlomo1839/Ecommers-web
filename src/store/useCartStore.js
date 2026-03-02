import { create } from 'zustand';

const useCartStore = create((set, get) => ({
    cart: [],

    addToCarts: (product) => set((state) => ({
        cart: [...state.cart, product]
    })),

    removeFromCart: (productId) => set((state) => ({
        cart: state.cart.filter((item) => item.id != productId)
    })),

    clearCarts: () => set({ cart: [] }),

    getTotalItems: () => get().cart.length,

    getTotalPrice: () => get().cart.reduce((sum, item) => sum + item.price, 0),
    
}));

export default useCartStore;
