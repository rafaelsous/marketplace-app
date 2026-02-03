import { ActivityIndicator, TouchableOpacity } from "react-native";

import { colors } from "@/styles/colors";

import { AppIcon } from "@/shared/components/AppIcon";
import { useFavoriteButtonViewModel } from "./useFavoriteButton.viewModel";

export function FavoriteButtonView({
  isLoading,
  isFavorite,
  handleToggleFavorite,
}: Readonly<ReturnType<typeof useFavoriteButtonViewModel>>) {
  if (isLoading) {
    return <ActivityIndicator color={colors["purple-base"]} size={24} />;
  }

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={handleToggleFavorite}>
      <AppIcon
        name={isFavorite ? "HeartBold" : "HeartOutline"}
        size={24}
        color={colors.danger}
      />
    </TouchableOpacity>
  );
}
