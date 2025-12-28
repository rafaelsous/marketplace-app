import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity } from "react-native";

import { useRegisterViewModel } from "./useRegister.viewModel";

import { AuthFormHeader } from "@/shared/components/AuthFormHeader";
import { KeyboardContainer } from "@/shared/components/KeyboardContainer";
import { AppInputController } from "@/shared/components/AppInputController";

export function RegisterView({
  onSubmit,
  control,
}: Readonly<ReturnType<typeof useRegisterViewModel>>) {
  return (
    <KeyboardContainer>
      <ScrollView className="px-[40px] flex-1 gap-4">
        <AuthFormHeader
          title="Crie sua conta"
          subtitle="Informe os seus dados pessoais e de acesso"
        />

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

        <AppInputController
          control={control}
          name="email"
          label="E-mail"
          leftIcon="Letter"
          placeholder="mail@exemplo.br"
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

        <TouchableOpacity activeOpacity={0.7} onPress={onSubmit}>
          <Text>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => router.push("login")}
        >
          <Text>Acessar</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardContainer>
  );
}
