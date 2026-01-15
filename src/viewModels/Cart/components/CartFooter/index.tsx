import { Text, TouchableOpacity, View } from "react-native";

import { colors } from "@/styles/colors";

import { useCartStore } from "@/shared/store/cart-store";

import { AppIcon } from "@/shared/components/AppIcon";
import { AppButton } from "@/shared/components/AppButton";
import { AppPriceText } from "@/shared/components/AppPriceText";

export function CartFooter() {
  const { total } = useCartStore();

  return (
    <View className="w-full p-3 gap-4 bg-white rounded-lg shadow-lg">
      <View className="py-2 gap-3">
        <View className="flex-row items-center">
          <Text className="flex-1 text-gray-400 uppercase">Valor total</Text>

          <AppPriceText
            value={total}
            classNameCurrency="text-base font-bold"
            classNameValue="text-base text-gray-500 font-bold"
          />
        </View>

        <View className="flex-row items-center">
          <Text className="flex-1 text-gray-400 uppercase">Pagamento</Text>

          <TouchableOpacity
            hitSlop={16}
            activeOpacity={0.7}
            className="flex-row items-center gap-2"
          >
            <AppIcon
              name="CardOutline"
              size={24}
              color={colors["purple-base"]}
            />

            <Text className="text-purple-base font-bold">Adicionar cartão</Text>
          </TouchableOpacity>
        </View>
      </View>

      <AppButton>Confirmar compra</AppButton>
    </View>
  );
}
