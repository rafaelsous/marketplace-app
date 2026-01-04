import { Text, View } from "react-native";
import { useProductCardViewModel } from "./useProductCard.viewModel";

export function ProductCardView({
  product,
}: Readonly<ReturnType<typeof useProductCardViewModel>>) {
  return (
    <View>
      <Text>{product.name}</Text>
    </View>
  );
}
