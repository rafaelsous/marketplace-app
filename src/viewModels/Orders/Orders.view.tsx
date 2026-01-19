import { FlatList, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useUserStore } from "@/shared/store/user-store";
import { useOrdersViewModel } from "./useOrdersViewModel";

export function OrdersView({
  orders,
}: Readonly<ReturnType<typeof useOrdersViewModel>>) {
  const { logout } = useUserStore();

  return (
    <SafeAreaView className="flex-1">
      <FlatList
        data={orders}
        keyExtractor={({ id }) => `order-${id}`}
        renderItem={({ item }) => <Text>{item.productName}</Text>}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
