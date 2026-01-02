import { router } from "expo-router";
import { SolarIcon } from "react-native-solar-icons";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { colors } from "@/styles/colors";

import { useRegisterViewModel } from "./useRegister.viewModel";

import { AppButton } from "@/shared/components/AppButton";
import { AuthFormHeader } from "@/shared/components/AuthFormHeader";
import { KeyboardContainer } from "@/shared/components/KeyboardContainer";
import { AppInputController } from "@/shared/components/AppInputController";

export function RegisterView({
  onSubmit,
  control,
  handleSelectAvatar,
  avatarUri,
}: Readonly<ReturnType<typeof useRegisterViewModel>>) {
  return (
    <KeyboardContainer>
      <ScrollView className="px-[40px] flex-1">
        <AuthFormHeader
          title="Crie sua conta"
          subtitle="Informe os seus dados pessoais e de acesso"
        />

        <TouchableOpacity
          className="w-[120px] h-[120px] mb-8 items-center justify-center self-center rounded-xl bg-shape overflow-hidden"
          activeOpacity={0.7}
          onPress={handleSelectAvatar}
        >
          {avatarUri ? (
            <Image
              source={{ uri: avatarUri }}
              className="w-[120px] h-[120px] rounde-xl"
              resizeMode="cover"
            />
          ) : (
            <SolarIcon
              name="UploadMinimalistic"
              size={32}
              type="outline"
              color={colors["purple-base"]}
            />
          )}
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
