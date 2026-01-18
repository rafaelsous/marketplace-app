import { useState } from "react";
import { router } from "expo-router";
import { Toast } from "toastify-react-native";

import { useCartStore } from "@/shared/store/cart-store";

import { useAppModal } from "@/shared/hooks/useAppModal";
import { CreditCard } from "@/shared/interfaces/credit-card";
import { useCreateOrderMutation } from "@/shared/queries/order/use-create-order.mutation";

export function useCartFooterViewModel() {
  const [selectedCreditCard, setSelectedCreditCard] =
    useState<CreditCard | null>(null);

  const { total, products, clearCart } = useCartStore();
  const { showSuccess } = useAppModal();

  const createOrderMutation = useCreateOrderMutation();

  async function handleCreateOrder() {
    if (!selectedCreditCard)
      return Toast.warn("Selecione o cartão de crédito", "top");

    await createOrderMutation.mutateAsync({
      creditCardId: selectedCreditCard.id,
      items: products.map(({ id, quantity }) => ({
        productId: id,
        quantity,
      })),
    });

    clearCart();

    showSuccess({
      title: "Sucesso",
      message: "Pedido realizado com sucesso!",
      buttonText: "Ver pedidos",
      onButtonPress: () => router.push("/orders"),
    });
  }

  return {
    total,
    selectedCreditCard,
    handleCreateOrder,
    setSelectedCreditCard,
    isOrderLoading: createOrderMutation.isPending,
  };
}
