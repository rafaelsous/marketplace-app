import { CreditCartView } from "./CreditCard.view";
import { useCreditCardViewModel } from "./useCreditCard.viewModel";
import { FocusedField } from "../../useAddCreditCardBottomSheet.viewModel";

export interface CreditCardData {
  number: string;
  name: string;
  expiry: string;
  cvv: string;
}

interface CreditCardProps {
  isFlipped: boolean;
  focusedField: FocusedField | null;
  creditCardData: CreditCardData;
}

export function CreditCard({
  isFlipped,
  focusedField,
  creditCardData,
}: Readonly<CreditCardProps>) {
  const viewModel = useCreditCardViewModel(isFlipped);

  return (
    <CreditCartView
      creditCardData={creditCardData}
      focusedField={focusedField}
      {...viewModel}
    />
  );
}
