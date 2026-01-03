import { Text, TouchableOpacity, View } from "react-native";

import { useUserStore } from "@/shared/store/user-store";

export default function Orders() {
  const { logout } = useUserStore();

  return (
    <View className="flex-1 items-center justify-center gap-4">
      <Text className="text-purple-base">Orders Screen</Text>

      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
