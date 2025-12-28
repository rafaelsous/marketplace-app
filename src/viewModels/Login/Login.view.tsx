import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

import { AuthFormHeader } from "@/shared/components/AuthFormHeader";

export function LoginView() {
  return (
    <View className="flex-1 items-center justify-center gap-4">
      <AuthFormHeader
        title="Acesse sua conta"
        subtitle="Informe seu e-mail e senha para entrar"
      />

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => router.push("register")}
      >
        <Text>Cadastar</Text>
      </TouchableOpacity>
    </View>
  );
}
