import { ScrollView } from "react-native-gesture-handler";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { colors } from "@/styles/colors";

import { useProfileViewModel } from "./useProfile.viewModel";

import { AppIcon } from "@/shared/components/AppIcon";
import { AppButton } from "@/shared/components/AppButton";
import { ProfileHeader } from "./components/ProfileHeader";
import { KeyboardContainer } from "@/shared/components/KeyboardContainer";
import { AppInputController } from "@/shared/components/AppInputController";

export function ProfileView({
  control,
  onSubmit,
  avatarUri,
  isSubmitting,
  handleLogout,
  handleSelectAvatar,
}: Readonly<ReturnType<typeof useProfileViewModel>>) {
  return (
    <KeyboardContainer>
      <ScrollView className="px-[40px] flex-1">
        <ProfileHeader onLogout={handleLogout} />

        <TouchableOpacity
          className="w-[120px] h-[120px] mt-6 mb-8 items-center justify-center self-center rounded-xl bg-shape overflow-hidden"
          activeOpacity={0.7}
        >
          {avatarUri ? (
            <Image
              source={{ uri: avatarUri }}
              className="w-[120px] h-[120px] rounde-xl"
              resizeMode="cover"
            />
          ) : (
            <AppIcon
              name="UploadMinimalisticOutline"
              size={32}
              color={colors["purple-base"]}
            />
          )}
        </TouchableOpacity>

        <View className="pb-16 gap-10">
          <View className="gap-6">
            <Text
              style={{ marginTop: 24 }}
              className="text-base text-gray-500 font-bold"
            >
              Dados pessoais
            </Text>

            <AppInputController
              control={control}
              name="name"
              label="Nome"
              leftIcon="UserOutline"
              placeholder="Seu nome completo"
            />

            <AppInputController
              control={control}
              name="phone"
              label="Telefone"
              leftIcon="PhoneOutline"
              placeholder="(00) 00000-0000"
              keyboardType="phone-pad"
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
              leftIcon="LetterOutline"
              placeholder="mail@exemplo.br"
              keyboardType="email-address"
            />

            <AppInputController
              control={control}
              name="password"
              label="Senha atual"
              leftIcon="KeyMinimalisticSquare2Outline"
              placeholder="Senha atual"
              secureTextEntry
            />

            <AppInputController
              control={control}
              name="passwordConfirm"
              label="Nova senha"
              leftIcon="KeyMinimalisticSquare2Outline"
              placeholder="Sua nova senha"
              secureTextEntry
            />
          </View>

          <AppButton onPress={onSubmit} isLoading={isSubmitting}>
            Atualizar cadastro
          </AppButton>
        </View>
      </ScrollView>
    </KeyboardContainer>
  );
}
