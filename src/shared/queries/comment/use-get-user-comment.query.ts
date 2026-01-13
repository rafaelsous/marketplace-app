import { useQuery } from "@tanstack/react-query";

import { getUserProductComment } from "@/shared/services/product.service";

export function useGetUserCommentQuery(productId: number) {
  const query = useQuery({
    queryKey: ["user-product-comment", productId],
    queryFn: async () => getUserProductComment(productId),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return query;
}
