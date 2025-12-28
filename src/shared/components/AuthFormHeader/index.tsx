import { Image, Text, View } from "react-native";

import logo from "@/assets/images/logo.png";

type Props = {
  title: string;
  subtitle: string;
};

export function AuthFormHeader({ title, subtitle }: Readonly<Props>) {
  return (
    <View className="mb-14 items-center gap-8">
      <Image source={logo} resizeMode="contain" />

      <View className="items-center gap-2">
        <Text className="text-3xl text-gray-500 font-bold">{title}</Text>
        <Text className="text-base text-gray-300">{subtitle}</Text>
      </View>
    </View>
  );
}
