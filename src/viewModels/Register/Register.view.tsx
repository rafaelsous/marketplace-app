import { router } from "expo-router";
import { SolarIcon } from "react-native-solar-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { useRegisterViewModel } from "./useRegister.viewModel";

import { AppButton } from "@/shared/components/AppButton";
import { AuthFormHeader } from "@/shared/components/AuthFormHeader";
import { KeyboardContainer } from "@/shared/components/KeyboardContainer";
import { AppInputController } from "@/shared/components/AppInputController";

export function RegisterView({
  onSubmit,
  control,
  handleSelectAvatar,
}: Readonly<ReturnType<typeof useRegisterViewModel>>) {
  return (
    <KeyboardContainer>
      <ScrollView className="px-[40px] flex-1">
        <AuthFormHeader
          title="Crie sua conta"
          subtitle="Informe os seus dados pessoais e de acesso"
        />

        <TouchableOpacity activeOpacity={0.7} onPress={handleSelectAvatar}>
          <SolarIcon name="CloudUpload" size={32} type="outline" />
        </TouchableOpacity>

        <AppInputController
          control={control}
          name="name"
          label="Nome"
          leftIcon="User"
          placeholder="Seu nome completo"
        />

        <AppInputController
          control={control}
          name="phone"
          label="Telefone"
          leftIcon="Phone"
          placeholder="(00) 00000-0000"
        />

        <Text
          style={{ marginTop: 24 }}
          className="text-base text-gray-500 font-bold"
        >
          Acesso
        </Text>

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

        <AppInputController
          control={control}
          name="passwordConfirm"
          label="Confirmar senha"
          leftIcon="KeyMinimalisticSquare2"
          placeholder="Confirme a senha"
          secureTextEntry
        />

        <AppButton className="mt-6" rightIcon="ArrowRight" onPress={onSubmit}>
          Cadastrar
        </AppButton>

        <View className="mt-16 pb-16 gap-5">
          <Text className="text-base text-gray-300">Já tem uma conta?</Text>

          <AppButton
            variant="outlined"
            rightIcon="ArrowRight"
            onPress={() => router.push("login")}
          >
            Acessar
          </AppButton>
        </View>
      </ScrollView>
    </KeyboardContainer>
  );
}
