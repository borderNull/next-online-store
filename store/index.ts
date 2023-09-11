import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

export interface CartProduct {
  id: number;
  name: string;
  price: string;
  special: string;
  image: string;
  cartId?: string;
  priceInCents: number;
  specialInCents: number;
  size: string;
}

interface CartState {
  products: CartProduct[];
  orderId: number;
}

interface CartStore extends CartState {
  addProduct: (product: CartProduct) => void;
  removeProduct: (cartId: string) => void;
  checkoutCard: () => void;
  resetState: () => void;
}

const initialState: CartState = {
  products: [],
  orderId: 0,
};

export const useCartStore = create<CartStore>()((set, get) => ({
  ...initialState,
  addProduct: (product) => {
    set((state) => ({
      products: [...state.products, { ...product, cartId: uuidv4() }],
    }));
  },
  removeProduct: (cartId) => {
    set((state) => ({
      products: state.products.filter((product) => product.cartId !== cartId),
    }));
  },
  checkoutCard: async () => {
    const products = get().products;
    const data = { products };

    const res = await fetch("http://localhost:3000/checkout/placeOrder", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      console.error("error", res);
    }

    const { orderId } = await res.json();

    set({
      products: [],
      orderId,
    });
  },
  resetState: () => set(initialState),
}));
