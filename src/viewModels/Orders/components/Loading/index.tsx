import { ActivityIndicator, Text, View } from "react-native";

import { colors } from "@/styles/colors";

export function Loading() {
  return (
    <View className="flex-1 bg-background">
      <View className="flex-1 items-center justify-center gap-4">
        <ActivityIndicator size={"large"} color={colors["purple-base"]} />

        <Text className="text-base text-purple-base">
          Carregando lista de pedidos...
        </Text>
      </View>
    </View>
  );
}
