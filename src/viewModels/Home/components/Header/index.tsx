import { SolarIcon } from "react-native-solar-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { colors } from "@/styles/colors";

import { useUserStore } from "@/shared/store/user-store";

export function Header() {
  const { user } = useUserStore();

  return (
    <View className="relative flex-row items-center gap-5">
      {user?.avatarUrl ? (
        <Image
          source={{ uri: user?.avatarUrl }}
          resizeMode="cover"
          className="w-[56px] h-[56px] border border-shape rounded-xl"
        />
      ) : (
        <View className="w-[56px] h-[56px] items-center justify-center bg-shape border-2 border-gray-200 rounded-xl">
          <SolarIcon name="User" size={36} color={colors.gray[300]} />
        </View>
      )}

      <View className="gap-1">
        <Text className="text-base text-gray-500 font-bold">
          Olá, {user?.name.trim().split(" ")[0] || "Usuário"}
        </Text>

        <TouchableOpacity
          hitSlop={16}
          activeOpacity={0.7}
          className="flex-row items-center gap-2"
        >
          <Text className="text-base text-purple-base font-semibold">
            Ver perfil
          </Text>
          <SolarIcon
            name="ArrowRight"
            size={20}
            color={colors["purple-base"]}
            type="outline"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
