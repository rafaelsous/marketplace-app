import { useGetProductDetailsQuery } from "@/shared/queries/product/use-get-product-details.query";
import { useGetProductCommentsInfiniteQuery } from "@/shared/queries/product/use-get-product-comments-infinite.query";

export function useProductViewModel(productId: number) {
  const {
    data: productDetails,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

  const {
    productComments,
    isLoading: isLoadingComments,
    hasNextPage,
    fetchNextPage,
    refetch,
    error: getCommentsError,
    isRefetching,
    isFetchingNextPage,
  } = useGetProductCommentsInfiniteQuery(productId);

  function handleLoadMore() {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }

  function handleRefetch() {
    if (!isRefetching) {
      refetch();
    }
  }

  function handleReached() {
    handleLoadMore();
  }

  return {
    productDetails,
    isLoading,
    error,
    productComments,
    isLoadingComments,
    handleRefetch,
    handleReached,
    getCommentsError,
  };
}
