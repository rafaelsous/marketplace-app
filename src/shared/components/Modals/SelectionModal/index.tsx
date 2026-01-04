import clsx from "clsx";
import { Text, TouchableOpacity, View } from "react-native";

import { colors } from "@/styles/colors";

import { AppIcon } from "../../AppIcon";
import { SelectionOption, SelectionVariant } from "@/shared/hooks/useAppModal";

export interface SelectionModalProps {
  title: string;
  message?: string;
  options: SelectionOption[];
}

export function SelectionModal({
  title,
  message,
  options,
}: Readonly<SelectionModalProps>) {
  const getButtonClass = (variant: SelectionVariant) =>
    clsx(
      "w-full px-4 py-3 flex-row items-center justify-center gap-2 rounded-lg",
      {
        "bg-danger": variant === "danger",
        "bg-purple-base": variant === "primary",
        "bg-blue-dark": variant === "secondary",
      }
    );

  return (
    <View className="w-[85%] max-w-sm mx-auto p-6 bg-white rounded-xl shadow-2xl">
      <View className="mb-6 items-center gap-3">
        <Text className="text-lg text-gray-900 font-bold">{title}</Text>

        {message && (
          <Text className="text-base text-gray-600 leading-6">{message}</Text>
        )}
      </View>

      <View className="gap-3">
        {options.map((option) => (
          <TouchableOpacity
            key={option.text}
            activeOpacity={0.7}
            hitSlop={16}
            className={getButtonClass(option.variant ?? "primary")}
            onPress={option.onPress}
          >
            {option.icon && (
              <AppIcon name={option.icon} size={20} color={colors.white} />
            )}
            <Text className="text-white font-semibold">{option.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
