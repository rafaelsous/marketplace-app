import { Text, TouchableOpacity, View } from "react-native";

import { useUserStore } from "@/shared/store/user-store";

export default function Cart() {
  const { logout } = useUserStore();

  return (
    <View className="flex-1 items-center justify-center gap-4">
      <Text className="text-purple-base">Cart Screen</Text>

      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
