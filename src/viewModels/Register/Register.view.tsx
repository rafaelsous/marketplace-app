import { Text, View } from "react-native";

import { useRegisterViewModel } from "./useRegister.viewModel";

export function RegisterView({
  userData,
  setUserData,
}: Readonly<ReturnType<typeof useRegisterViewModel>>) {
  return (
    <View className="flex-1 items-center justify-center gap-4">
      <Text>Register Screen: {userData.name}</Text>
    </View>
  );
}
