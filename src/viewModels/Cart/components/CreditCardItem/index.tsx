import { CreditCardItemView } from "./CreditCardItem.view";
import { CreditCard } from "@/shared/interfaces/credit-card";
import { useCreditCardItemViewModel } from "./useCreditCardItem.viewModel";

interface CreditCardItemProps {
  creditCard: CreditCard;
  isSelected: boolean;
  setSelectedCreditCard: (creditCard: CreditCard) => void;
}

export function CreditCardItem({
  creditCard,
  isSelected,
  setSelectedCreditCard,
}: Readonly<CreditCardItemProps>) {
  const viewModel = useCreditCardItemViewModel(creditCard);

  return (
    <CreditCardItemView
      isSelected={isSelected}
      setSelectedCreditCard={setSelectedCreditCard}
      {...viewModel}
    />
  );
}
