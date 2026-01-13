import { TouchableOpacity } from "react-native";

import { colors } from "@/styles/colors";

import { AppIcon } from "@/shared/components/AppIcon";

interface StarsProps {
  rating: number;
  handleRatingChange: (rating: number) => void;
}

export function Stars({ rating, handleRatingChange }: StarsProps) {
  return Array.from({ length: 5 }, (_, index) => {
    const starNumber = index + 1;
    const isSelected = starNumber <= rating;

    return (
      <TouchableOpacity
        key={starNumber}
        activeOpacity={0.7}
        onPress={() => handleRatingChange(starNumber)}
      >
        <AppIcon
          name={isSelected ? "StarBold" : "StarOutline"}
          size={28}
          color={isSelected ? colors["purple-base"] : colors.gray[200]}
        />
      </TouchableOpacity>
    );
  });
}
