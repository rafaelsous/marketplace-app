import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

import { colors } from "@/styles/colors";

import { AppIcon } from "@/shared/components/AppIcon";

interface ProfileHeaderProps {
  onLogout: () => void;
}

export function ProfileHeader({ onLogout }: Readonly<ProfileHeaderProps>) {
  return (
    <View className="flex-row items-center justify-between">
      <TouchableOpacity
        hitSlop={16}
        activeOpacity={0.7}
        onPress={router.back}
        className="p-[2x] flex-row items-center gap-2"
      >
        <AppIcon
          name="ArrowLeftOutline"
          size={20}
          color={colors["purple-base"]}
        />

        <Text className="text-base text-purple-base font-bold">Voltar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        hitSlop={16}
        activeOpacity={0.7}
        onPress={onLogout}
        className="p-[2x] flex-row items-center gap-2"
      >
        <AppIcon name="Logout3Outline" size={20} color={colors["danger"]} />

        <Text className="text-base text-danger font-bold">Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
