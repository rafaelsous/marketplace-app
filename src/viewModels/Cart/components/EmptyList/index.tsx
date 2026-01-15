import { router } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors } from "@/styles/colors";

import { AppIcon } from "@/shared/components/AppIcon";
import { AppButton } from "@/shared/components/AppButton";

export function CartEmptyList() {
  return (
    <SafeAreaView className="flex-1">
      <View className="mt-16 flex-1 items-center gap-8">
        <AppIcon
          name="CartLargeMinimalisticOutline"
          size={42}
          color={colors.gray[200]}
        />

        <View className="items-center gap-3">
          <Text className="text-xl text-gray-400 font-bold">
            Seu carrinho está vazio
          </Text>

          <Text className="max-w-[270px] text-lg text-gray-300 text-center leading-7">
            Explore o catálogo de produtos e faça sua primeira compra!
          </Text>
        </View>

        <View className="flex-1">
          <AppButton
            leftIcon="Shop2Outline"
            variant="outlined"
            className="w-auto px-12 gap-2"
            onPress={() => router.push("/(private)/(tabs)/home")}
          >
            Explorar produtos
          </AppButton>
        </View>
      </View>
    </SafeAreaView>
  );
}
