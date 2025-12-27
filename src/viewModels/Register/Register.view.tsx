import { Text, TouchableOpacity, View } from "react-native";

import { useRegisterViewModel } from "./useRegister.viewModel";
import { AppInput } from "../../shared/components/AppInput";

export function RegisterView({
  onSubmit,
}: Readonly<ReturnType<typeof useRegisterViewModel>>) {
  return (
    <View className="flex-1 justify-center gap-4">
      <Text>Register Screen</Text>

      <AppInput leftIcon="KeyMinimalisticSquare2" />

      <TouchableOpacity activeOpacity={0.7} onPress={onSubmit}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}
