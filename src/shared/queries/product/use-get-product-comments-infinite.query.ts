import { useInfiniteQuery } from "@tanstack/react-query";

import { getProductComments } from "@/shared/services/product.service";

export function useGetProductCommentsInfiniteQuery(productId: number) {
  const query = useInfiniteQuery({
    queryKey: ["product-comments", productId],
    queryFn: ({ pageParam = 1 }) =>
      getProductComments({
        productId,
        pagination: {
          page: pageParam,
          perPage: 20,
        },
      }),
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.totalPages
        ? lastPage.page + 1
        : undefined;
    },
    initialPageParam: 1,
  });

  const productComments = query.data?.pages.flatMap((page) => page.data) ?? [];

  return { ...query, productComments };
}
