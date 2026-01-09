import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function ProductDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text>Product Details Screen: Product #{id}</Text>
    </View>
  );
}
