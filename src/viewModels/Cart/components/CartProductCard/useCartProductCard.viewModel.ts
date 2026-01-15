import { useCartStore } from "@/shared/store/cart-store";

export function useCartProductCardViewModel() {
  const { removeProduct, updateQuantity } = useCartStore();

  function handleProductIncreaseQuantity(productId: number, quantity: number) {
    updateQuantity({ productId, quantity: quantity + 1 });
  }

  function handleProductDecreaseQuantity(productId: number, quantity: number) {
    if (quantity <= 1) {
      removeProduct(productId);
      return;
    }

    updateQuantity({ productId, quantity: quantity - 1 });
  }

  return {
    handleProductIncreaseQuantity,
    handleProductDecreaseQuantity,
  };
}
