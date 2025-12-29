import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

import { useLoginViewModel } from "./useLogin.viewModel";

import { AuthFormHeader } from "@/shared/components/AuthFormHeader";
import { KeyboardContainer } from "@/shared/components/KeyboardContainer";
import { AppInputController } from "@/shared/components/AppInputController";

export function LoginView({
  control,
  onSubmit,
}: Readonly<ReturnType<typeof useLoginViewModel>>) {
  return (
    <KeyboardContainer>
      <View className="px-[40px] flex-1 justify-center gap-4">
        <AuthFormHeader
          title="Acesse sua conta"
          subtitle="Informe seu e-mail e senha para entrar"
        />

        <AppInputController
          control={control}
          name="email"
          label="E-mail"
          leftIcon="Letter"
          placeholder="mail@exemplo.br"
          keyboardType="email-address"
        />

        <AppInputController
          control={control}
          name="password"
          label="Senha"
          leftIcon="KeyMinimalisticSquare2"
          placeholder="Sua senha"
          secureTextEntry
        />

        <TouchableOpacity activeOpacity={0.7} onPress={onSubmit}>
          <Text>Acessar</Text>
        </TouchableOpacity>

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
