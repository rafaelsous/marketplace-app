import { Image, Text, TouchableOpacity, View } from "react-native";
import { StarBold } from "@solar-icons/react-native";

import { colors } from "@/styles/colors";

import { useProductCardViewModel } from "./useProductCard.viewModel";

export function ProductCardView({
  product,
  displayName,
  formatedRating,
}: Readonly<ReturnType<typeof useProductCardViewModel>>) {
  return (
    <TouchableOpacity className="w-[48%] h-[157px] mt-6 mb-2 bg-white rounded-xl overflow-hidden shadow-sm">
      <View>
        <Image
          source={{ uri: product.photo }}
          resizeMode="cover"
          className="w-full h-[96px] rounded-md"
        />

        <View className="absolute top-0 right-0 px-2 py-1 flex-row items-center gap-1 rounded-b-lg rounded-r-none bg-white">
          <StarBold size={12} color={colors["blue-base"]} />
          <Text className="text-sm font-semibold text-gray-500">
            {formatedRating}
          </Text>
        </View>
      </View>

      <View className="p-3">
        <Text className="text-xs font-semibold" numberOfLines={2}>
          {displayName}
        </Text>

        <View className="flex-row items-center">
          <Text>R$ {product.value}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
