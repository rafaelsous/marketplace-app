import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Text>Home Screen</Text>

      <TouchableOpacity onPress={() => router.push("/login")}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
