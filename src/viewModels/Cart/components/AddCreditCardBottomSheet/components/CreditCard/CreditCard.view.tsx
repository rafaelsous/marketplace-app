import clsx from "clsx";
import { Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

import { colors } from "@/styles/colors";

import { useCreditCardViewModel } from "./useCreditCard.viewModel";
import { FocusedField } from "../../useAddCreditCardBottomSheet.viewModel";

const PURPLE_GRADIENT: readonly [string, string, string] = [
  colors["disabled-purple"],
  colors["purple-dark"],
  colors["purple-base"],
];

export function CreditCartView({
  focusedField,
}: Readonly<
  ReturnType<typeof useCreditCardViewModel> & {
    focusedField: FocusedField | null;
  }
>) {
  return (
    <View className="h-[192px] mx-5">
      <Animated.View
        style={{
          position: "absolute",
          width: "100%",
          height: 192,
          backfaceVisibility: "hidden",
        }}
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
            <View className="w-12 h-9 bg-yellow-300 rounded-lg" />
          </View>

          <View
            className={clsx("px-1 py-2 rounded-md", {
              "": focusedField !== "number",
              "bg-white/20": focusedField === "number",
            })}
          >
            <Text className="text-lg text-white tracking-widest text-center">
              1234 6578 9012 3456
            </Text>
          </View>

          <View className="flex-row items-end justify-between">
            <View
              className={clsx("px-1 py-2 rounded-lg", {
                "": focusedField !== "name",
                "bg-white/20": focusedField === "name",
              })}
            >
              <Text className="text-sm text-white font-bold uppercase text-center">
                Seu nome aqui
              </Text>
            </View>

            <View
              className={clsx("px-1 py-2 rounded-lg", {
                "": focusedField !== "expiry",
                "bg-white/20": focusedField === "expiry",
              })}
            >
              <Text className="text-lg text-white tracking-widest text-center">
                07/38
              </Text>
            </View>
          </View>
        </LinearGradient>
      </Animated.View>

      <Animated.View></Animated.View>
    </View>
  );
}
