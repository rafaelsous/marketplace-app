import { Text, View } from "react-native";

export function CartHeader() {
  return (
    <View className="gap-1">
      <Text className="text-xl text-gray-500 font-bold">Carrinho</Text>

      <Text className="text-base text-gray-400">
        Veja seu carrinho de compras
      </Text>
    </View>
  );
}
