import { FlatList, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { OrderCard } from "./components/OrderCard";
import { useUserStore } from "@/shared/store/user-store";
import { useOrdersViewModel } from "./useOrdersViewModel";
import { CartEmptyList } from "./components/EmptyList";

export function OrdersView({
  orders,
}: Readonly<ReturnType<typeof useOrdersViewModel>>) {
  const { logout } = useUserStore();

  return (
    <SafeAreaView className="flex-1">
      <FlatList
        data={[]}
        keyExtractor={({ id }) => `order-${id}`}
        renderItem={({ item }) => <OrderCard order={item} />}
        contentContainerClassName="px-6 pb-[120px] gap-2"
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={CartEmptyList}
      />

      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
