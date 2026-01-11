import { ActivityIndicator, Text, View } from "react-native";

import { colors } from "@/styles/colors";

interface EmptyListParams {
  isLoadingComments: boolean;
}

export function EmtpyList({ isLoadingComments }: Readonly<EmptyListParams>) {
  return isLoadingComments ? (
    <View className="py-8 items-center gap-2">
      <ActivityIndicator size={"small"} color={colors["purple-base"]} />
      <Text className="text-gray-500">Carregando avaliações...</Text>
    </View>
  ) : (
    <View className="py-8 items-center gap-1">
      <Text className="text-base text-gray-500">
        Ainda não há avaliações para este produto
      </Text>
      <Text className="text-sm text-gray-400">Seja o primeiro a comentar!</Text>
    </View>
  );
}
