import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Text, TouchableOpacity } from "react-native";

import { useCartViewModel } from "./useCart.viewModel";
import { useUserStore } from "@/shared/store/user-store";

import { CartHeader } from "./components/CartHeader";
import { CartEmptyList } from "./components/EmptyList";
import { CartProductCard } from "./components/CartProductCard";

export function CartView({
  products,
}: Readonly<ReturnType<typeof useCartViewModel>>) {
  const { logout } = useUserStore();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <FlatList
        data={products}
        keyExtractor={({ id }) => `product-cart-${id}`}
        renderItem={({ item }) => <CartProductCard product={item} />}
        contentContainerClassName="px-6 gap-2"
        ListHeaderComponent={<CartHeader />}
        ListHeaderComponentClassName="mb-6"
        ListEmptyComponent={<CartEmptyList />}
        ListFooterComponentClassName="mt-16 items-center"
        ListFooterComponent={() => (
          <TouchableOpacity onPress={logout}>
            <Text>Logout</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
