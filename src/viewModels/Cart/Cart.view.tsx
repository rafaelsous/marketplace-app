import { Text, TouchableOpacity, View } from "react-native";

import { useCartViewModel } from "./useCart.viewModel";
import { useUserStore } from "@/shared/store/user-store";

export function CartView({}: Readonly<ReturnType<typeof useCartViewModel>>) {
  const { logout } = useUserStore();

  return (
    <View className="flex-1 items-center justify-center gap-4">
      <Text className="text-purple-base">Cart Screen View</Text>

      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
