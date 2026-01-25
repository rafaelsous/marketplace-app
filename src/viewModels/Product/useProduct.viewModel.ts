import { router } from "expo-router";
import { createElement } from "react";

import { useCartStore } from "@/shared/store/cart-store";
import { useModalStore } from "@/shared/store/modal-store";
import { useBottomSheetStore } from "@/shared/store/bottomsheet-store";
import { localNotificationsService } from "@/shared/services/local-notifications.service";
import { useGetProductDetailsQuery } from "@/shared/queries/product/use-get-product-details.query";
import { useGetProductCommentsInfiniteQuery } from "@/shared/queries/product/use-get-product-comments-infinite.query";

import { ReviewBottomSheet } from "./components/ReviewBottonSheet";
import { AddToCartSuccessModal } from "./components/AddToCartSuccessModal";

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

  const { addProduct } = useCartStore();

  const { open, close } = useModalStore();
  const { open: openBottomSheet } = useBottomSheetStore();

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

  function onGoToCart() {
    router.push("/(private)/(tabs)/cart");
    close();
  }

  function onContinueShopping() {
    router.push("/(private)/(tabs)/home");
    close();
  }

  function handleAddProductToCart() {
    if (!productDetails) return;

    const { id, name, value, photo } = productDetails;

    addProduct({ id, name, price: value, image: photo });

    localNotificationsService.scheduleCartReminder({
      productId: id,
      productName: name,
      delayInMinutes: 30,
    });

    open(
      createElement(AddToCartSuccessModal, {
        productName: name,
        onClose: close,
        onGoToCart,
        onContinueShopping,
      }),
    );
  }

  function handleOpenReview() {
    if (!productDetails) return;

    openBottomSheet({
      content: createElement(ReviewBottomSheet, {
        productId: productDetails.id,
      }),
    });
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
    isRefetching,
    isFetchingNextPage,
    handleAddProductToCart,
    handleOpenReview,
  };
}
