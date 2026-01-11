import { router } from "expo-router";
import { StarBold } from "@solar-icons/react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { colors } from "@/styles/colors";

import { Product } from "@/shared/interfaces/product";
import { AppIcon } from "@/shared/components/AppIcon";
import { AppPriceText } from "@/shared/components/AppPriceText";

interface ProductHeaderPrams {
  productDetails: Product;
}

export function ProductHeader({
  productDetails,
}: Readonly<ProductHeaderPrams>) {
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

      <View className="w-full mt-4 mb-7 bg-white rounded-lg overflow-hidden shadow-gray-500/30">
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

      <View className="gap-5 bg-background">
        <View className="gap-4">
          <View className="flex-row items-baseline justify-between">
            <Text className="max-w-[70%] text-xl text-gray-400 font-bold">
              {productDetails.name}
            </Text>
            <AppPriceText
              value={Number(productDetails.value)}
              classNameValue="text-xl text-gray-500 font-bold"
            />
          </View>

          <View className="p-3 pr-4 flex-row items-center gap-3 bg-blue-light rounded-[10px]">
            <View className="w-[36px] h-[36px] items-center justify-center bg-blue-dark rounded-md">
              <AppIcon name="DiagramUpLinear" size={20} color={colors.white} />
            </View>

            <Text className="flex-1 text-sm text-gray-400 leading-6">
              <Text className="font-bold">{productDetails.views} pessoas</Text>{" "}
              visualizaram este produto nos últimos 7 dias
            </Text>
          </View>

          <View className="gap-4">
            <Text className="text-justify leading-6">
              {productDetails.description}
            </Text>

            {Boolean(productDetails.width || productDetails.height) && (
              <View>
                {Boolean(productDetails.height) && (
                  <Text className="text-sm text-gray-400 leading-6">
                    <Text className="font-bold">Altura:</Text>{" "}
                    {productDetails.height}
                  </Text>
                )}

                {Boolean(productDetails.width) && (
                  <Text className="text-sm text-gray-400 leading-6">
                    <Text className="font-bold">Largura:</Text>{" "}
                    {productDetails.width}
                  </Text>
                )}
              </View>
            )}
          </View>

          <View className="gap-[6px]">
            <Text className="text-base text-gray-500 font-bold">Categoria</Text>
            <Text className="text-sm text-gray-400">
              {productDetails.category.name}
            </Text>
          </View>
        </View>

        <View className="w-full h-[1px] bg-shape" />

        <View>
          <View className="flex-row items-center justify-between">
            <Text className="text-base text-gray-500 font-bold">
              Avaliações
            </Text>

            <TouchableOpacity hitSlop={16} activeOpacity={0.7}>
              <Text className="text-base text-purple-base font-medium">
                Avaliar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
