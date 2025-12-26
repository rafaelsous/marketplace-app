import { Text, View } from "react-native";

import { useRegisterViewModel } from "./useRegister.viewModel";

export function RegisterView({}: Readonly<
  ReturnType<typeof useRegisterViewModel>
>) {
  return (
    <View className="flex-1 items-center justify-center gap-4">
      <Text>Register Screen</Text>
    </View>
  );
}
