import clsx from "clsx";
import { Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

import { colors } from "@/styles/colors";

import { CreditCardData } from ".";
import { useCreditCardViewModel } from "./useCreditCard.viewModel";
import { FocusedField } from "../../useAddCreditCardBottomSheet.viewModel";

const PURPLE_GRADIENT: readonly [string, string, string] = [
  colors["disabled-purple"],
  colors["purple-dark"],
  colors["purple-base"],
];

export function CreditCartView({
  focusedField,
  creditCardData,
  backAnimatedStyled,
  frontAnimatedStyled,
  formatCreditCardNumber,
}: ReturnType<typeof useCreditCardViewModel> & {
  focusedField: FocusedField | null;
} & {
  creditCardData: CreditCardData;
}) {
  function renderFocusedField(field: FocusedField) {
    if (focusedField) {
      return focusedField === field ? "bg-white/20 rounded-lg" : undefined;
    }
  }

  return (
    <View className="h-[220px] mx-5 rounded-[16px] overflow-hidden">
      <Animated.View
        style={[
          frontAnimatedStyled,
          {
            position: "absolute",
            width: "100%",
            height: 220,
            borderWidth: 1,
            borderColor: colors["purple-base"],
            backfaceVisibility: "hidden",
          },
        ]}
      >
        <LinearGradient
          colors={PURPLE_GRADIENT}
          start={{ x: 0, y: 0.5 }}
          style={{
            flex: 1,
            paddingTop: 16,
            paddingBottom: 20,
            paddingHorizontal: 24,
            borderRadius: 16,
            gap: 24,
          }}
        >
          <View className="flex-row items-center justify-between">
            <View className="w-12 h-9 bg-yellow-400 rounded-lg" />
          </View>

          <View className="gap-4">
            <View
              className={clsx("mt-6 px-1 py-2", renderFocusedField("number"))}
            >
              <Text className="text-2xl text-white tracking-widest text-center">
                {formatCreditCardNumber(creditCardData.number)}
              </Text>
            </View>

            <View className="flex-row items-end justify-between">
              <View className={clsx("px-1 py-2", renderFocusedField("name"))}>
                <Text
                  className={clsx(
                    "text-lg text-white font-semibold text-center",
                    {
                      uppercase: creditCardData.name.trim().length > 0,
                    },
                  )}
                >
                  {creditCardData.name || "Seu nome aqui"}
                </Text>
              </View>

              <View className={clsx("px-1 py-2", renderFocusedField("expiry"))}>
                <Text className="text-lg text-white tracking-widest text-center">
                  {creditCardData.expiry || "MM/AA"}
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </Animated.View>

      <Animated.View
        style={[
          backAnimatedStyled,
          {
            position: "absolute",
            width: "100%",
            height: 220,
            borderWidth: 1,
            borderColor: colors["purple-base"],
            backfaceVisibility: "hidden",
          },
        ]}
      >
        <LinearGradient
          colors={PURPLE_GRADIENT}
          start={{ x: 0, y: 0.5 }}
          style={{
            flex: 1,
            paddingTop: 16,
            paddingBottom: 20,
            gap: 42,
          }}
        >
          <View className="h-12 bg-gray-500" />

          <View className="px-6 flex-row items-center justify-center gap-3">
            <View
              className={clsx(
                "h-12 pr-3 flex-1 justify-center bg-white rounded-md",
                renderFocusedField("cvv"),
              )}
            >
              <Text className="text-lg text-gray-400 font-bold self-end tracking-widest">
                {creditCardData.cvv || (
                  <View className="flex-row items-center gap-1">
                    <View className="w-2 h-2 bg-gray-400 rounded-full" />
                    <View className="w-2 h-2 bg-gray-400 rounded-full" />
                    <View className="w-2 h-2 bg-gray-400 rounded-full" />
                  </View>
                )}
              </Text>
            </View>
            <Text className="text-base text-white">CVV</Text>
          </View>
        </LinearGradient>
      </Animated.View>
    </View>
  );
}
