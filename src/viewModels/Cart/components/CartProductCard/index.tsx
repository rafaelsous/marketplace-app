import { CartProduct } from "@/shared/store/cart-store";
import { CartProductCardView } from "./CartProductCard.view";
import { useCartProductCardViewModel } from "./useCartProductCard.viewModel";

interface CartProductCardProps {
  product: CartProduct;
}

export function CartProductCard({ product }: Readonly<CartProductCardProps>) {
  const viewModel = useCartProductCardViewModel();

  return <CartProductCardView product={product} {...viewModel} />;
}
