import { ProductI } from "@/shared/interfaces/product";

import { ProductCardView } from "./ProductCard.view";
import { useProductCardViewModel } from "./useProductCard.viewModel";

interface ProductCardParams {
  product: ProductI;
}

export function ProductCard(props: Readonly<ProductCardParams>) {
  const viewModel = useProductCardViewModel(props);

  return <ProductCardView {...viewModel} />;
}
