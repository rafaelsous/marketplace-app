import { ProductI } from "@/shared/interfaces/product";

interface UseProductCardViewModelParams {
  product: ProductI;
}

export function useProductCardViewModel({
  product,
}: UseProductCardViewModelParams) {
  return { product };
}
