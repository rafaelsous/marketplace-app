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
    (set, get) => ({
      products: [],
      total: 0,

      addProduct: (newProduct: OmitedCartProduct) =>
        set((state) => cartService.addProdutToCart(state.products, newProduct)),

      removeProduct: (productId: number) =>
        set((state) =>
          cartService.removeProductFromCart(state.products, productId)
        ),

      updateQuantity: (params: { productId: number; quantity: number }) =>
        set((state) =>
          cartService.updateProductQuantity({
            productsList: state.products,
            productId: params.productId,
            quantity: params.quantity,
          })
        ),

      clearCart: () => set({ products: [], total: 0 }),

      getItemCount: () => cartService.getItemCount(get().products),
    }),
    { name: "marketplace-cart", storage: createJSONStorage(() => AsyncStorage) }
  )
);
