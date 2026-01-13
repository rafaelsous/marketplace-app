import { Text, View } from "react-native";
import { useReviewBottomSheetViewModel } from "./useReviewBottomSheet.viewModel";

export function ReviewBottomSheetView({}: Readonly<
  ReturnType<typeof useReviewBottomSheetViewModel>
>) {
  return (
    <View>
      <Text>Review do produto</Text>
    </View>
  );
}
