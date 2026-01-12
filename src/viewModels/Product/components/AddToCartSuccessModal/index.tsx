import Color from "color";
import { Text, View } from "react-native";

import { colors } from "@/styles/colors";

import { AppIcon } from "@/shared/components/AppIcon";
import { AppButton } from "@/shared/components/AppButton";

interface AddToCartSuccessModalProps {
  productName: string;
  onClose: () => void;
  onGoToCart: () => void;
  onContinueShopping: () => void;
}

export function AddToCartSuccessModal({
  onClose,
  onGoToCart,
  onContinueShopping,
  productName,
}: Readonly<AddToCartSuccessModalProps>) {
  return (
    <View className="w-full max-w-sm p-6 gap-4 bg-white rounded-xl">
      <View className="items-center gap-3">
        <View
          style={{
            width: 64,
            height: 64,
            borderRadius: 999,
            backgroundColor: Color(colors.success).lighten(0.999).hex(),
          }}
          className="items-center justify-center rounded-full"
        >
          <AppIcon name="UnreadOutline" size={32} color={colors.success} />
        </View>

        <Text className="text-xl font-medium text-center text-gray-500">
          Produto adicionado!
        </Text>
      </View>

      <Text className="leading-6">
        <Text className="font-semibold">{productName}</Text> foi adicionado ao
        seu carrinho de compras.
      </Text>

      <View className="gap-3">
        <AppButton
          leftIcon="CartLargeMinimalisticOutline"
          onPress={onGoToCart}
          className="w-full justify-center gap-2"
        >
          Ver carrinho
        </AppButton>

        <AppButton variant="outlined" onPress={onContinueShopping}>
          Continuar comprando
        </AppButton>
      </View>
    </View>
  );
}
