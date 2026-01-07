import { router } from "expo-router";
import { Text, View } from "react-native";

import { useLoginViewModel } from "./useLogin.viewModel";

import { AppButton } from "@/shared/components/AppButton";
import { AuthFormHeader } from "@/shared/components/AuthFormHeader";
import { KeyboardContainer } from "@/shared/components/KeyboardContainer";
import { AppInputController } from "@/shared/components/AppInputController";

export function LoginView({
  control,
  onSubmit,
}: Readonly<ReturnType<typeof useLoginViewModel>>) {
  return (
    <KeyboardContainer>
      <View className="px-[40px] flex-1 items-center justify-center gap-6">
        <View className="w-full flex-1 justify-center gap-10">
          <AuthFormHeader
            title="Acesse sua conta"
            subtitle="Informe seu e-mail e senha para entrar"
          />

          <View className="gap-6">
            <AppInputController
              control={control}
              name="email"
              label="E-mail"
              leftIcon="LetterOutline"
              placeholder="mail@exemplo.br"
              keyboardType="email-address"
            />

            <AppInputController
              control={control}
              name="password"
              label="Senha"
              leftIcon="KeyMinimalisticSquare2Outline"
              placeholder="Sua senha"
              secureTextEntry
            />
          </View>

          <AppButton rightIcon="ArrowRightOutline" onPress={onSubmit}>
            Acessar
          </AppButton>
        </View>

        <View className="relative top-16 pb-24 flex-2 self-end gap-5">
          <Text className="text-base text-gray-300">
            Ainda não tem uma conta?
          </Text>

          <AppButton
            variant="outlined"
            rightIcon="ArrowRightOutline"
            onPress={() => router.push("/(public)/register")}
          >
            Cadastar
          </AppButton>
        </View>
      </View>
    </KeyboardContainer>
  );
}
