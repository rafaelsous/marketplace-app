import { CreditCartView } from "./CreditCard.view";
import { useCreditCardViewModel } from "./useCreditCard.viewModel";
import { FocusedField } from "../../useAddCreditCardBottomSheet.viewModel";

interface CreditCardProps {
  isFlipped: boolean;
  focusedField: FocusedField | null;
}

export function CreditCard({
  isFlipped,
  focusedField,
}: Readonly<CreditCardProps>) {
  const viewModel = useCreditCardViewModel(isFlipped);

  return <CreditCartView focusedField={focusedField} {...viewModel} />;
}
