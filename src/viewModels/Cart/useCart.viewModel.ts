import { createElement } from "react";

import { useCartStore } from "@/shared/store/cart-store";
import { useBottomSheetStore } from "@/shared/store/bottomsheet-store";
import { useGetCreditCardsQuery } from "@/shared/queries/credit-card/use-get-credit-cards.query";

import { AddCreditCardBottomSheet } from "./components/AddCreditCardBottomSheet";

export function useCartViewModel() {
  const { products } = useCartStore();
  const { open: openBottomSheet } = useBottomSheetStore();

  const { data: creditCards = [], isLoading: isLoadingCreditCards } =
    useGetCreditCardsQuery();

  function handleOpenCreditCardBottomSheet() {
    openBottomSheet({
      content: createElement(AddCreditCardBottomSheet),
    });
  }

  return {
    products,
    creditCards,
    isLoadingCreditCards,
    handleOpenCreditCardBottomSheet,
  };
}
