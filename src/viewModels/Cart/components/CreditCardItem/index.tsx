import { CreditCardItemView } from "./CreditCardItem.view";
import { CreditCard } from "@/shared/interfaces/credit-card";
import { useCreditCardItemViewModel } from "./useCreditCardItem.viewModel";

interface CreditCardItemProps {
  creditCard: CreditCard;
}

export function CreditCardItem({ creditCard }: Readonly<CreditCardItemProps>) {
  const viewModel = useCreditCardItemViewModel(creditCard);

  return <CreditCardItemView {...viewModel} />;
}
