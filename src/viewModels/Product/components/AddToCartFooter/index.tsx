import { View } from "react-native";

import { colors } from "@/styles/colors";

import { Product } from "@/shared/interfaces/product";
import { AppButton } from "@/shared/components/AppButton";
import { AppPriceText } from "@/shared/components/AppPriceText";

interface AddToCartFooterProps {
  product: Product;
  onAddToCart: () => void;
}

export function AddToCartFooter({
  product,
  onAddToCart,
}: Readonly<AddToCartFooterProps>) {
  return (
    <View
      style={{
        height: 116,
        borderTopWidth: 1,
        borderTopColor: colors.shape,
      }}
      className="p-6 pb-8 flex-row items-center justify-between bg-white"
    >
      <AppPriceText value={Number(product.value)} />

      <AppButton
        leftIcon="CartLargeMinimalisticOutline"
        className="w-auto gap-2"
        onPress={onAddToCart}
      >
        Adicionar
      </AppButton>
    </View>
  );
}
