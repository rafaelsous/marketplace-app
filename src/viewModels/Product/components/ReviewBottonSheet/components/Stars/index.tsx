import { TouchableOpacity } from "react-native";

import { colors } from "@/styles/colors";

import { AppIcon } from "@/shared/components/AppIcon";

interface StarsProps {
  rating: number;
}

export function Stars({ rating }: StarsProps) {
  return Array.from({ length: 5 }, (_, index) => {
    const starNumber = index + 1;
    const isSelected = starNumber <= rating;

    return (
      <TouchableOpacity key={starNumber} activeOpacity={0.7}>
        <AppIcon
          name={isSelected ? "StarBold" : "StarOutline"}
          size={28}
          color={isSelected ? colors["purple-base"] : colors.gray[200]}
        />
      </TouchableOpacity>
    );
  });
}
