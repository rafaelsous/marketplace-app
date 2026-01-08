import { useState } from "react";

import { useDebounce } from "@/shared/hooks/useDebounce";
import { useFilterStore } from "@/shared/store/filter-store";
import { useProductInfinityQuery } from "@/shared/queries/product/use-product-infinity.query";

export function useHomeViewModel() {
  const [searchInputText, setSearchInputText] = useState("");
  const currentSearchText = useDebounce(searchInputText);

  const { appliedFilterState } = useFilterStore();

  const {
    products,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isRefetching,
    refetch,
  } = useProductInfinityQuery({
    filters: { ...appliedFilterState, searchText: currentSearchText },
  });

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
    searchInputText,
    setSearchInputText,
  };
}
