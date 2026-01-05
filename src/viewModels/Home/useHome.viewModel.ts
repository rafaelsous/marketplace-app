import { useProductInfinitQuery } from "@/shared/queries/product/use-product-infinite.query";

export function useHomeViewModel() {
  const {
    products,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isRefetching,
    refetch,
  } = useProductInfinitQuery();

  function handleLoadMore() {
    if (hasNextPage && !isFetchingNextPage && !isLoading) {
      fetchNextPage();
    }
  }

  function handleEndReached() {
    handleLoadMore();
  }

  async function handleRefresh() {
    await refetch();
  }

  return {
    handleLoadMore,
    handleRefresh,
    products,
    handleEndReached,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
  };
}
