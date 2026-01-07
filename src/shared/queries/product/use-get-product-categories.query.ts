import { useQuery } from "@tanstack/react-query";

import { getProductCategories } from "@/shared/services/product.service";

export function useGetProductCategoriesQuery() {
  const query = useQuery({
    queryKey: ["product-categories"],
    queryFn: getProductCategories,
    staleTime: 1000 * 60 * 60,
  });

  return query;
}
