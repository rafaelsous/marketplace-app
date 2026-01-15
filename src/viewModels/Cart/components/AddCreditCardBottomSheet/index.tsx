import { AddCreditCardBottomSheetView } from "./AddCreditCardBottomSheet.view";
import { useAddCreditCardBottomSheetViewModel } from "./useAddCreditCardBottomSheet.viewModel";

export function AddCreditCardBottomSheet() {
  const viewModel = useAddCreditCardBottomSheetViewModel();

  return <AddCreditCardBottomSheetView {...viewModel} />;
}
