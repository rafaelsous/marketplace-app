import { ProductI } from "@/shared/interfaces/product";

interface UseProductCardViewModelParams {
  product: ProductI;
}

function formatProductName(name: string) {
  return name.length > 17 ? `${name.slice(0, 17)}...` : name;
}

export function useProductCardViewModel({
  product,
}: UseProductCardViewModelParams) {
  const displayName = formatProductName(product.name);
  const formatedRating = product.averageRating.toFixed(1).replace(",", ".");

  return { product, displayName, formatedRating };
}
