import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

import { AuthFormHeader } from "@/shared/components/AuthFormHeader";
import { KeyboardContainer } from "@/shared/components/KeyboardContainer";

export function LoginView() {
  return (
    <KeyboardContainer>
      <View className="px-[40px] flex-1 justify-center gap-4">
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
    </KeyboardContainer>
  );
}
