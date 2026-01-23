import { format } from "date-fns";
import { Image, Text, View } from "react-native";

import { Order } from "@/shared/interfaces/order";
import { buildImageUrl } from "@/shared/helpers/buildImageUrl";
import { AppPriceText } from "@/shared/components/AppPriceText";

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
        source={{
          uri: order.productPhoto ? buildImageUrl(order.productPhoto) : "",
        }}
        resizeMode="cover"
      />

      <View className="p-2 flex-1 gap-3">
        <View className="flex-row items-center justify-between gap-3">
          <Text
            className="flex-1 text-base text-gray-500 font-bold"
            numberOfLines={1}
          >
            {order.productName}
          </Text>

          <Text className="text-md text-gray-300">
            {format(order.createdAt, "dd/MM/yy")}
          </Text>
        </View>

        <View className="gap-[2x]">
          <View className="flex-row">
            <Text className="text-sm text-gray-400">
              {order.quantity} {order.quantity > 1 ? "unidades" : "unidade"}{" "}
              •{" "}
            </Text>

            <AppPriceText
              value={order.totalPrice}
              classNameCurrency="text-sm text-gray-400"
              classNameValue="text-sm text-gray-400"
            />
          </View>

          <Text className="text-sm text-gray-400">
            Cartão final {order.creditCard.maskedNumber.slice(-4)}
          </Text>
        </View>
      </View>
    </View>
  );
}
