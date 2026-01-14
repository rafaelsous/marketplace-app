import { FlatList, Text, TouchableOpacity } from "react-native";

import { useCartViewModel } from "./useCart.viewModel";
import { useUserStore } from "@/shared/store/user-store";
import { SafeAreaView } from "react-native-safe-area-context";
import { CartProductCard } from "./components/CartProductCard";

export function CartView({
  products,
}: Readonly<ReturnType<typeof useCartViewModel>>) {
  const { logout } = useUserStore();

  return (
    <SafeAreaView className="flex-1">
      <FlatList
        data={products}
        keyExtractor={({ id }) => `product-cart-${id}`}
        renderItem={({ item }) => <CartProductCard product={item} />}
        contentContainerClassName="px-6 gap-2"
      />

      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
