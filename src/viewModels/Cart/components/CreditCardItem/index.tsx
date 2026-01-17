import { Text, TouchableOpacity, View } from "react-native";

import { colors } from "@/styles/colors";

import { AppIcon } from "@/shared/components/AppIcon";
import { CreditCard } from "@/shared/interfaces/credit-card";

interface CreditCardItemProps {
  creditCard: CreditCard;
}

export function CreditCardItem({
  creditCard: { number, expirationDate },
}: Readonly<CreditCardItemProps>) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="p-3 flex-row gap-2 border border-shape rounded-lg"
    >
      <AppIcon name="CardOutline" size={24} color={colors.gray[300]} />

      <View className="flex-1 gap-[6px]">
        <Text className="text-base text-gray-400 font-semibold">{number}</Text>

        <Text className="text-base text-gray-400 font-semibold">
          {expirationDate.toString()}
        </Text>
      </View>

      <TouchableOpacity hitSlop={16} activeOpacity={0.7}>
        <AppIcon name="Pen2Outline" size={24} color={colors["purple-base"]} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
