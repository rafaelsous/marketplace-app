import { createElement } from "react";

import { useCartStore } from "@/shared/store/cart-store";
import { useBottomSheetStore } from "@/shared/store/bottomsheet-store";

import { AddCreditCardBottomSheet } from "./components/AddCreditCardBottomSheet";

export function useCartViewModel() {
  const { products } = useCartStore();
  const { open: openBottomSheet } = useBottomSheetStore();

  function handleOpenCreditCardBottomSheet() {
    openBottomSheet({
      content: createElement(AddCreditCardBottomSheet),
    });
  }

  return { products, handleOpenCreditCardBottomSheet };
}
