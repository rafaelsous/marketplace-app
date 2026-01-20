import { router } from "expo-router";
import { Text, View } from "react-native";

import { colors } from "@/styles/colors";

import { AppIcon } from "@/shared/components/AppIcon";
import { AppButton } from "@/shared/components/AppButton";

export function OrdersError() {
  return (
    <View className="px-6 flex-1 justify-center gap-12 bg-background">
      <View className="gap-5">
        <View className="items-center">
          <AppIcon name="DangerOutline" size={40} color={colors.danger} />
        </View>

        <Text className="text-lg text-danger" style={{ textAlign: "center" }}>
          Ocorreu um erro ao buscar a lista de pedidos
        </Text>
      </View>

      <AppButton onPress={router.back}>Voltar</AppButton>
    </View>
  );
}
