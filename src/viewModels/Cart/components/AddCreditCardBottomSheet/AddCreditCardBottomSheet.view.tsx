import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useAddCreditCardBottomSheetViewModel } from "./useAddCreditCardBottomSheet.viewModel";

export function AddCreditCardBottomSheetView({}: ReturnType<
  typeof useAddCreditCardBottomSheetViewModel
>) {
  return (
    <SafeAreaView className="flex-1 px-6">
      <Text>AddCreditCardBottomSheetView component</Text>
    </SafeAreaView>
  );
}
