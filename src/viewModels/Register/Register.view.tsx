import { Text, TouchableOpacity, View } from "react-native";

import { useRegisterViewModel } from "./useRegister.viewModel";

export function RegisterView({
  onSubmit,
}: Readonly<ReturnType<typeof useRegisterViewModel>>) {
  return (
    <View className="flex-1 items-center justify-center gap-4">
      <Text>Register Screen</Text>

      <TouchableOpacity activeOpacity={0.7} onPress={onSubmit}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}
