import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useOrdersViewModel } from "./useOrdersViewModel";

import { OrderCard } from "./components/OrderCard";
import { CartEmptyList } from "./components/EmptyList";
import { OrdersHeader } from "./components/OrdersHeader";

export function OrdersView({
  orders,
}: Readonly<ReturnType<typeof useOrdersViewModel>>) {
  return (
    <SafeAreaView edges={["top"]} className="flex-1">
      <FlatList
        data={orders}
        keyExtractor={({ id }) => `order-${id}`}
        renderItem={({ item }) => <OrderCard order={item} />}
        contentContainerClassName="px-6 gap-2"
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={CartEmptyList}
        ListHeaderComponent={OrdersHeader}
        ListHeaderComponentClassName="mb-6"
      />
    </SafeAreaView>
  );
}
