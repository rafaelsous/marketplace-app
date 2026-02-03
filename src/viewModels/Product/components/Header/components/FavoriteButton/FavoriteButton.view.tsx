import { TouchableOpacity } from "react-native";

import { colors } from "@/styles/colors";

import { AppIcon } from "@/shared/components/AppIcon";
import { useFavoriteButtonViewModel } from "./useFavoriteButton.viewModel";

export function FavoriteButtonView({
  isFavorite,
}: Readonly<ReturnType<typeof useFavoriteButtonViewModel>>) {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <AppIcon
        name={isFavorite ? "HeartBold" : "HeartOutline"}
        size={24}
        color={colors.danger}
      />
    </TouchableOpacity>
  );
}
