import { useFilterStore } from "@/shared/store/filter-store";
import { useProductInfinityQuery } from "@/shared/queries/product/use-product-infinity.query";

export function useHomeViewModel() {
  const { appliedFilterState } = useFilterStore();

  const {
    products,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isRefetching,
    refetch,
  } = useProductInfinityQuery({ filters: appliedFilterState });

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
