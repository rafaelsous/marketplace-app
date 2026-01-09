import { useGetProductDetailsQuery } from "@/shared/queries/product/use-get-product-details.query";

export function useProductViewModel(productId: number) {
  const {
    data: productDetail,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

  return { productDetail, isLoading, error };
}
