import { Text, View } from "react-native";

export function OrdersHeader() {
  return (
    <View className="gap-1">
      <Text className="text-xl text-gray-500 font-bold">Pedidos</Text>

      <Text className="text-base text-red-400">
        Confira sua lista de produtos comprados
      </Text>
    </View>
  );
}
