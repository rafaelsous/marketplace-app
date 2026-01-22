import { CreditCartView } from "./CreditCard.view";
import { useCreditCardViewModel } from "./useCreditCard.viewModel";

export function CreditCard() {
  const viewModel = useCreditCardViewModel();

  return <CreditCartView {...viewModel} />;
}
