import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { colors } from "@/styles/colors";

import { useCartFooterViewModel } from "./useCartFooter.viewModel";

import { CartFooterProps } from ".";
import { CreditCardItem } from "../CreditCardItem";
import { AppIcon } from "@/shared/components/AppIcon";
import { AppButton } from "@/shared/components/AppButton";
import { AppPriceText } from "@/shared/components/AppPriceText";

export function CartFooterView({
  total,
  isLoading,
  creditCards,
  isOrderLoading,
  handleCreateOrder,
  selectedCreditCard,
  setSelectedCreditCard,
  openCreditCardBottomSheet,
}: Readonly<ReturnType<typeof useCartFooterViewModel> & CartFooterProps>) {
  return (
    <View className="w-full p-3 gap-4s bg-white rounded-lg shadow-lg">
      <View className="py-2 gap-3">
        <View className="flex-row items-center">
          <Text className="flex-1 text-gray-400 uppercase">Valor total</Text>

          <AppPriceText
            value={total}
            classNameCurrency="text-base font-bold"
            classNameValue="text-base text-gray-500 font-bold"
          />
        </View>

        <View className="flex-row items-center">
          <Text className="flex-1 text-gray-400 uppercase">Pagamento</Text>

          <TouchableOpacity
            hitSlop={16}
            activeOpacity={0.7}
            className="flex-row items-center gap-2"
            onPress={openCreditCardBottomSheet}
          >
            <AppIcon
              name="CardOutline"
              size={24}
              color={colors["purple-base"]}
            />

            <Text className="text-purple-base font-bold">Adicionar cartão</Text>
          </TouchableOpacity>
        </View>
      </View>

      {isLoading ? (
        <View className="py-4 items-center gap-2">
          <ActivityIndicator size={"small"} color={colors["purple-base"]} />
          <Text className="text-sm text-gray-300">
            Carregando cartões de crédito...
          </Text>
        </View>
      ) : (
        <FlatList
          data={creditCards}
          keyExtractor={({ id }) => `credit-card-${id}`}
          renderItem={({ item: creditCard }) => (
            <CreditCardItem
              creditCard={creditCard}
              isSelected={selectedCreditCard?.id === creditCard.id}
              setSelectedCreditCard={setSelectedCreditCard}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}

      <AppButton
        className="mt-4"
        isLoading={isOrderLoading}
        onPress={handleCreateOrder}
      >
        Confirmar compra
      </AppButton>
    </View>
  );
}
