import { Text, TouchableOpacity, View } from "react-native";

import { AppInput } from "../../shared/components/AppInput";
import { useRegisterViewModel } from "./useRegister.viewModel";

export function RegisterView({
  onSubmit,
}: Readonly<ReturnType<typeof useRegisterViewModel>>) {
  return (
    <View className="flex-1 justify-center gap-4">
      <Text>Crie sua conta</Text>
      <Text>Informe os seus dados pessoais e de acesso</Text>

      <AppInput label="Nome" leftIcon="User" placeholder="Seu nome completo" />
      <AppInput
        label="Telefone"
        leftIcon="Phone"
        placeholder="(00) 00000-0000"
      />

      <AppInput
        label="E-mail"
        leftIcon="Letter"
        placeholder="mail@exemplo.br"
      />
      <AppInput
        label="Senha"
        leftIcon="KeyMinimalisticSquare2"
        placeholder="Sua senha"
      />
      <AppInput
        label="Confirmar senha"
        leftIcon="KeyMinimalisticSquare2"
        placeholder="Confirme a senha"
      />

      <TouchableOpacity activeOpacity={0.7} onPress={onSubmit}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
