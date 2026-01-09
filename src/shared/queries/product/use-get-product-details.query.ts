import { useQuery } from "@tanstack/react-query";

import { getProductDetails } from "@/shared/services/product.service";

export function useGetProductDetailsQuery(productId: number) {
  const query = useQuery({
    queryKey: ["product-details", productId],
    queryFn: async () => getProductDetails(productId),
  });

  return query;
}
