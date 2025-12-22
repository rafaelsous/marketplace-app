import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Login() {
  return (
    <View className="flex-1 items-center justify-center gap-4">
      <Text className="text-purple-base">Login Screen</Text>

      <TouchableOpacity
        hitSlop={16}
        activeOpacity={0.7}
        onPress={() => router.push("/register")}
      >
        <Text>Account Register</Text>
      </TouchableOpacity>
    </View>
  );
}
