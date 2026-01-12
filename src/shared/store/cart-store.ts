import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { cartService } from "../services/cart.service";

export interface CartProduct {
  id: number;
  name: string;
  price: string;
  quantity: number;
  image?: string;
}

export type OmitedCartProduct = Omit<CartProduct, "quantity">;

interface CartStore {
  products: CartProduct[];
  total: number;
  addProduct: (product: OmitedCartProduct) => void;
  removeProduct: (productId: number) => void;
  updateQuantity: (params: { productId: number; quantity: number }) => void;
  clearCart: () => void;
  getItemCount: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      products: [],
      total: 0,

      addProduct: (newProduct: OmitedCartProduct) =>
        set((state) => {
          const newItems = cartService.addProdutToCart(
            state.products,
            newProduct
          );

          const newTotal = cartService.calculateTotal(newItems);

          return { products: newItems, total: newTotal };
        }),
      removeProduct: (productId: number) => set({}),
      updateQuantity: (params: { productId: number; quantity: number }) =>
        set({}),
      clearCart: () => set({ products: [], total: 0 }),
      getItemCount: () => 0,
    }),
    { name: "marketplace-cart", storage: createJSONStorage(() => AsyncStorage) }
  )
);
