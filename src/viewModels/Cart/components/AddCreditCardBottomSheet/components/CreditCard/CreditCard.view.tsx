import { View } from "react-native";

import { colors } from "@/styles/colors";
import { useCreditCardViewModel } from "./useCreditCard.viewModel";
import { FocusedField } from "../../useAddCreditCardBottomSheet.viewModel";

export function CreditCartView({
  focusedField,
}: Readonly<
  ReturnType<typeof useCreditCardViewModel> & {
    focusedField: FocusedField | null;
  }
>) {
  return (
    <View
      style={{
        height: 220,
        backgroundColor: colors["purple-dark"],
        borderWidth: 1,
        borderColor: colors["purple-base"],
        borderRadius: 16,
      }}
    ></View>
  );
}
