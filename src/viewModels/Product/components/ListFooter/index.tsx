import { ActivityIndicator, View } from "react-native";

import { colors } from "@/styles/colors";

interface ListFooterProps {
  isLoadingMore: boolean;
}

export function ListFooter({ isLoadingMore }: Readonly<ListFooterProps>) {
  if (!isLoadingMore) return null;

  return (
    <View className="py-4">
      <ActivityIndicator size={"small"} color={colors["purple-base"]} />
    </View>
  );
}
