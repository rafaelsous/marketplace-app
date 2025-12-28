import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

import { useRegisterViewModel } from "./useRegister.viewModel";
import { AppInputController } from "@/shared/components/AppInputController";
import { AuthFormHeader } from "@/shared/components/AuthFormHeader";

export function RegisterView({
  onSubmit,
  control,
}: Readonly<ReturnType<typeof useRegisterViewModel>>) {
  return (
    <View className="flex-1 justify-center gap-4">
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
    </View>
  );
}
