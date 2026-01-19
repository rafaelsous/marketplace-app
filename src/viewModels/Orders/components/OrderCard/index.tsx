import { Image, Text, View } from "react-native";

import { Order } from "@/shared/interfaces/order";

interface OrderCardProps {
  order: Order;
}

export function OrderCard({ order }: Readonly<OrderCardProps>) {
  return (
    <View className="p-1 flex-row items-center gap-1 bg-white rounded-lg shadow-sm">
      <Image
        style={{
          width: 88,
          height: 81,
          borderRadius: 6,
        }}
        source={{ uri: order.productPhoto ?? "" }}
        resizeMode="cover"
      />

      <View className="p-2 flex-1 gap-3">
        <View className="flex-row items-center justify-between">
          <Text
            className="flex-1 text-base text-gray-500 font-bold"
            numberOfLines={1}
          >
            {order.productName}
          </Text>
          <Text>{order.createdAt.toString()}</Text>
        </View>

        <View className="gap-[2x]">
          <Text>
            {order.quantity} {order.quantity > 1 ? "unidades" : "unidade"}
            <Text> • R$ {order.totalPrice}</Text>
          </Text>

          <Text>Cartão final {order.creditCard.maskedNumber}</Text>
        </View>
      </View>
    </View>
  );
}
