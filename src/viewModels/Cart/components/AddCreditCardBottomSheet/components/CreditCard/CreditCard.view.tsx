import { View } from "react-native";

import { colors } from "@/styles/colors";
import { useCreditCardViewModel } from "./useCreditCard.viewModel";

export function CreditCartView({}: Readonly<
  ReturnType<typeof useCreditCardViewModel>
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
