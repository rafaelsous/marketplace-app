import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { colors } from "@/styles/colors";

import { useAddCreditCardBottomSheetViewModel } from "./useAddCreditCardBottomSheet.viewModel";

import { CreditCard } from "./components/CreditCard";
import { AppIcon } from "@/shared/components/AppIcon";
import { AppButton } from "@/shared/components/AppButton";
import { AppInputController } from "@/shared/components/AppInputController";

export function AddCreditCardBottomSheetView({
  control,
  isFlipped,
  focusedField,
  creditCardData,
  handleFieldBlur,
  handleFieldFocus,
  expirationDateMask,
  creditCardNumberMask,
  handleCloseBottomSheet,
  handleCreateCreditCard,
}: Readonly<ReturnType<typeof useAddCreditCardBottomSheetViewModel>>) {
  return (
    <ScrollView className="p-6">
      <View className="pb-4 gap-10">
        <View className="gap-6">
          <View className="flex-row items-center justify-between">
            <Text className="text-lg text-gray-500 font-bold">
              Cartão de crédito
            </Text>

            <TouchableOpacity
              hitSlop={16}
              activeOpacity={0.7}
              onPress={handleCloseBottomSheet}
            >
              <AppIcon
                name="CloseSquareOutline"
                size={24}
                color={colors.gray[400]}
              />
            </TouchableOpacity>
          </View>

          <CreditCard
            isFlipped={isFlipped}
            focusedField={focusedField}
            creditCardData={creditCardData}
          />

          <AppInputController
            control={control}
            name="titularName"
            label="Nome"
            placeholder="Nome do titular"
            leftIcon="UserOutline"
            onBlur={handleFieldBlur}
            onFocus={() => handleFieldFocus("name")}
          />

          <AppInputController
            control={control}
            name="number"
            label="Número"
            placeholder="Número do cartão"
            leftIcon="CardOutline"
            maxLength={19}
            keyboardType="numeric"
            mask={creditCardNumberMask}
            onBlur={handleFieldBlur}
            onFocus={() => handleFieldFocus("number")}
          />

          <View className="flex-row gap-4">
            <View className="flex-1">
              <AppInputController
                control={control}
                name="expirationDate"
                label="Vencimento"
                placeholder="MM/AA"
                leftIcon="CalendarOutline"
                keyboardType="numeric"
                mask={expirationDateMask}
                onBlur={handleFieldBlur}
                onFocus={() => handleFieldFocus("expiry")}
              />
            </View>

            <View className="flex-1">
              <AppInputController
                control={control}
                name="CVV"
                label="CVV"
                placeholder="Código de 3 dígitos"
                leftIcon="LockOutline"
                maxLength={3}
                keyboardType="numeric"
                onBlur={handleFieldBlur}
                onFocus={() => handleFieldFocus("cvv")}
              />
            </View>
          </View>
        </View>

        <View className="flex-row items-center justify-between gap-3">
          <View className="flex-1">
            <AppButton variant="outlined" onPress={handleCloseBottomSheet}>
              Cancelar
            </AppButton>
          </View>

          <View className="flex-1">
            <AppButton onPress={handleCreateCreditCard}>Salvar</AppButton>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
