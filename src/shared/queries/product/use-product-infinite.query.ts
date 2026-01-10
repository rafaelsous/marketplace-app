import { useInfiniteQuery } from "@tanstack/react-query";

import { FilterState } from "@/shared/store/filter-store";

import { getProducts } from "@/shared/services/product.service";

interface ProductsInfinityQueryParams {
  filters?: FilterState;
}

export function useProductInfiniteQuery({
  filters,
}: ProductsInfinityQueryParams) {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    isRefetching,
  } = useInfiniteQuery({
    queryFn: async ({ pageParam = 1 }) => {
      try {
        const response = await getProducts({
          pagination: {
            page: pageParam,
            perPage: 10,
          },
          filters: {
            categoryIds: filters?.selectedCategories ?? [],
            minValue: filters?.minValue ?? undefined,
            maxValue: filters?.maxValue ?? undefined,
            searchText: filters?.searchText ?? undefined,
          },
        });

        return response;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.totalPages
        ? lastPage.page + 1
        : undefined;
    },
    initialPageParam: 1,
    queryKey: ["products", filters],
    staleTime: 1000 * 60 * 5,
  });

  const products = data?.pages.flatMap((page) => page.data);

  return {
    products,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    isRefetching,
  };
}
