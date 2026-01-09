import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { colors } from "@/styles/colors";

import { AppIcon } from "@/shared/components/AppIcon";
import { ProductI } from "@/shared/interfaces/product";
import { StarBold } from "@solar-icons/react-native";

interface ProductHeaderPrams {
  productDetails: ProductI;
}

export function ProductHeader({
  productDetails,
}: Readonly<ProductHeaderPrams>) {
  console.log(productDetails.photo);
  return (
    <>
      <View>
        <TouchableOpacity
          hitSlop={16}
          activeOpacity={0.7}
          onPress={router.back}
          className="flex-row items-center gap-2"
        >
          <AppIcon
            name="ArrowLeftOutline"
            size={24}
            color={colors["purple-base"]}
          />
          <Text className="text-base text-purple-base font-semibold">
            Voltar
          </Text>
        </TouchableOpacity>
      </View>

      <View className="w-full mt-4 mb-7 bg-white rounded-lg overflow-hidden shadow-xl shadow-gray-500/30">
        <Image
          source={{ uri: productDetails.photo }}
          resizeMode="cover"
          className="w-full h-[197px] rounded-lg"
        />

        <View className="absolute top-0 right-0 p-[6px] flex-row items-center gap-[6px] bg-blue-light rounded-bl-lg">
          <StarBold size={16} color={colors["blue-base"]} />
          <Text className="text-sm text-gray-500 font-bold">
            {productDetails.averageRating.toFixed(1)}
            <Text className="text-xs text-gray-400"> / 5</Text>
          </Text>
        </View>
      </View>
    </>
  );
}
