import { Image, Text, TouchableOpacity, View } from "react-native";

import { colors } from "@/styles/colors";

import { CartProduct } from "@/shared/store/cart-store";
import { buildImageUrl } from "@/shared/helpers/buildImageUrl";
import { useCartProductCardViewModel } from "./useCartProductCard.viewModel";

import { AppIcon } from "@/shared/components/AppIcon";
import { AppPriceText } from "@/shared/components/AppPriceText";

interface CartProductCardViewProps extends ReturnType<
  typeof useCartProductCardViewModel
> {
  product: CartProduct;
}

export function CartProductCardView({
  product,
  handleProductIncreaseQuantity,
  handleProductDecreaseQuantity,
}: Readonly<CartProductCardViewProps>) {
  return (
    <View className="h-[72px] p-1 flex-row items-center gap-3 bg-white rounded-lg shadow-lg">
      <Image
        source={{ uri: product.image ? buildImageUrl(product?.image) : "" }}
        resizeMode="cover"
        className="size-[64px] rounded-md"
      />

      <View className="flex-1 gap-1">
        <Text className="text-sm text-gray-400" numberOfLines={2}>
          {product.name}
        </Text>

        <AppPriceText
          classNameCurrency="text-lg font-bold"
          classNameValue="text-lg text-gray-500 font-bold"
          value={Number(product.price)}
        />
      </View>

      <View className="w-24 w-min-24 flex-row items-center justify-around">
        <TouchableOpacity
          hitSlop={16}
          activeOpacity={0.7}
          onPress={() =>
            handleProductDecreaseQuantity(product.id, product.quantity)
          }
        >
          <AppIcon
            name="MinusSquareOutline"
            size={24}
            color={colors["purple-base"]}
          />
        </TouchableOpacity>

        <Text className="text-base font-medium text-gray-700 text-center">
          {product.quantity}
        </Text>

        <TouchableOpacity
          hitSlop={16}
          activeOpacity={0.7}
          onPress={() =>
            handleProductIncreaseQuantity(product.id, product.quantity)
          }
        >
          <AppIcon
            name="AddSquareOutline"
            size={24}
            color={colors["purple-base"]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
