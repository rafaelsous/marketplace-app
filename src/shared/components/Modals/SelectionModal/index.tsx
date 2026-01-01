import { SelectionOption } from "@/shared/hooks/useAppModal";
import { Text, TouchableOpacity, View } from "react-native";
import { SolarIcon } from "react-native-solar-icons";

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
  return (
    <View className="w-[85%] max-w-sm mx-auto p-6 bg-white rounded-xl shadow-2xl">
      <Text>{title}</Text>

      {message && <Text>{message}</Text>}

      <View>
        {options.map((option) => (
          <TouchableOpacity
            key={option.text}
            activeOpacity={0.7}
            hitSlop={16}
            className="w-full px-4 py-3 flex-row items-center justify-center gap-2 rounded-lg"
            onPress={option.onPress}
          >
            {option.icon && <SolarIcon name={option.icon} size={20} />}
            <Text>{option.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
