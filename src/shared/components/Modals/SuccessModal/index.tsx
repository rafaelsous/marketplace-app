import Color from "color";
import { Text, View } from "react-native";

import { colors } from "@/styles/colors";

import { AppIcon } from "../../AppIcon";
import { AppButton } from "../../AppButton";

export interface SuccessModalProps {
  title: string;
  message?: string;
  buttonText?: string;
  onButtonPress?: () => void;
}

export function SuccessModal({
  title,
  message,
  buttonText = "Fechar",
  onButtonPress,
}: Readonly<SuccessModalProps>) {
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
          {title}
        </Text>
      </View>

      <View className="items-center gap-4">
        <Text className="text-base text-center leading-6 font-semibold">
          {message}
        </Text>

        <AppButton onPress={onButtonPress}>{buttonText}</AppButton>
      </View>
    </View>
  );
}
