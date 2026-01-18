import { CartFooterView } from "./CartFooter.view";
import { CreditCard } from "@/shared/interfaces/credit-card";
import { useCartFooterViewModel } from "./useCartFooter.viewModel";

export interface CartFooterProps {
  creditCards: CreditCard[];
  isLoading: boolean;
  openCreditCardBottomSheet: () => void;
}

export function CartFooter({
  isLoading,
  creditCards,
  openCreditCardBottomSheet,
}: Readonly<CartFooterProps>) {
  const viewModel = useCartFooterViewModel();

  return (
    <CartFooterView
      creditCards={creditCards}
      isLoading={isLoading}
      openCreditCardBottomSheet={openCreditCardBottomSheet}
      {...viewModel}
    />
  );
}
