import { Text, TouchableOpacity, View } from "react-native";

import { colors } from "@/styles/colors";

import { useReviewBottomSheetViewModel } from "./useReviewBottomSheet.viewModel";

import { Stars } from "./components/Stars";
import { AppIcon } from "@/shared/components/AppIcon";
import { AppInput } from "@/shared/components/AppInput";
import { AppButton } from "@/shared/components/AppButton";

export function ReviewBottomSheetView({
  handleRatingChange,
  handleContentChange,
  ratingForm,
}: Readonly<ReturnType<typeof useReviewBottomSheetViewModel>>) {
  return (
    <View className="p-6 gap-10">
      <View className="gap-6 bg-background rounded-t-2xl">
        <View className="flex-row items-center justify-between">
          <Text className="text-lg text-gray-500 font-bold">
            {ratingForm.isEditing ? "Editar avaliação" : "Avaliar produto"}
          </Text>

          <TouchableOpacity hitSlop={16} activeOpacity={0.7}>
            <AppIcon
              name="CloseSquareOutline"
              size={24}
              color={colors.gray[400]}
            />
          </TouchableOpacity>
        </View>

        <View className="gap-3">
          <Text className="text-md text-gray-300 uppercase">Nota</Text>

          <View className="flex-row items-center gap-2">
            <Stars
              rating={ratingForm.rating}
              handleRatingChange={handleRatingChange}
            />
          </View>
        </View>

        <View>
          <Text className="text-md text-gray-300 uppercase">Comentário</Text>

          <AppInput
            placeholder={
              ratingForm.isEditing
                ? "Atualize sua avaliação"
                : "Descreva sua avaliação"
            }
            multiline
            numberOfLines={8}
            textAlign="left"
            textAlignVertical="top"
            className="h-[150px]"
            value={ratingForm.content}
            onChangeText={handleContentChange}
          />
        </View>
      </View>

      <View className="mb-4 flex-row items-center justify-between gap-3">
        <View className="flex-1">
          <AppButton variant="outlined" className="w-full">
            Cancelar
          </AppButton>
        </View>

        <View className="flex-1">
          <AppButton className="w-full">
            {ratingForm.isEditing ? "Atualizar" : "Enviar"}
          </AppButton>
        </View>
      </View>
    </View>
  );
}
