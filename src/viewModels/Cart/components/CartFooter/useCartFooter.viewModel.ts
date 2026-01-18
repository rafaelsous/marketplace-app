import { useState } from "react";

import { useCartStore } from "@/shared/store/cart-store";
import { CreditCard } from "@/shared/interfaces/credit-card";

export function useCartFooterViewModel() {
  const [selectedCreditCard, setSelectedCreditCard] =
    useState<CreditCard | null>(null);

  const { total } = useCartStore();

  return {
    total,
    selectedCreditCard,
    setSelectedCreditCard,
  };
}
