import { Text, TouchableOpacity, View } from "react-native";

import { colors } from "@/styles/colors";

import { AppIcon } from "@/shared/components/AppIcon";
import { useBottomSheetStore } from "@/shared/store/bottomsheet-store";
import { AppInput } from "@/shared/components/AppInput";
import { AppButton } from "@/shared/components/AppButton";

export function FilterView() {
  const { close } = useBottomSheetStore();

  return (
    <View className="p-4 px-6 gap-6">
      <View className="flex-row items-center justify-between">
        <Text className="text-lg text-gray-500 font-bold">
          Filtrar anúncios
        </Text>

        <TouchableOpacity hitSlop={16} activeOpacity={0.7} onPress={close}>
          <AppIcon
            name="CloseSquareOutline"
            size={24}
            color={colors.gray[300]}
          />
        </TouchableOpacity>
      </View>

      <View>
        <Text className="text-base text-gray-300 font-semibold uppercase">
          Valor
        </Text>

        <View className="flex-row items-center justify-between gap-5">
          <View className="flex-1">
            <AppInput
              placeholder="De"
              className="w-[48%]"
              keyboardType="numeric"
            />
          </View>

          <View>
            <AppInput
              placeholder="Até"
              className="w-[48%]"
              keyboardType="numeric"
            />
          </View>
        </View>
      </View>

      <View>
        <Text className="text-base text-gray-300 font-semibold uppercase">
          Categoria
        </Text>
      </View>

      <View className="mt-10 mb-6 flex-row gap-3">
        <View className="flex-1">
          <AppButton variant="outlined">Limpar filtro</AppButton>
        </View>

        <View className="flex-1">
          <AppButton>Filtrar</AppButton>
        </View>
      </View>
    </View>
  );
}
