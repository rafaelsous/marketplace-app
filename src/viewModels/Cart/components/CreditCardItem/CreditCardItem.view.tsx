import { Text, TouchableOpacity, View } from "react-native";

import { colors } from "@/styles/colors";

import { AppIcon } from "@/shared/components/AppIcon";
import { CreditCard } from "@/shared/interfaces/credit-card";
import { useCreditCardItemViewModel } from "./useCreditCardItem.viewModel";

export function CreditCardItemView({
  creditCard,
  isSelected,
  setSelectedCreditCard,
  formatedExpirationDate,
  formatedCreditCardNumber,
}: Readonly<
  ReturnType<typeof useCreditCardItemViewModel> & {
    isSelected: boolean;
    setSelectedCreditCard: (creditCard: CreditCard) => void;
  }
>) {
  return (
    <TouchableOpacity
      onPress={() => setSelectedCreditCard(creditCard)}
      activeOpacity={0.7}
      className={`p-3 flex-row gap-2 border ${isSelected ? "border-purple-base" : "border-shape"} rounded-lg`}
    >
      <AppIcon name="CardOutline" size={24} color={colors.gray[300]} />

      <View className="flex-1 gap-[6px]">
        <Text className="text-base text-gray-400">
          Cartão final {formatedCreditCardNumber}
        </Text>

        <Text className="text-base text-gray-400">
          {formatedExpirationDate}
        </Text>
      </View>

      <TouchableOpacity hitSlop={16} activeOpacity={0.7}>
        <AppIcon name="Pen2Outline" size={24} color={colors["purple-base"]} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
