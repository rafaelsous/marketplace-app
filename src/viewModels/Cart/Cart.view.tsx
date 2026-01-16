import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useCartViewModel } from "./useCart.viewModel";

import { CartFooter } from "./components/CartFooter";
import { CartHeader } from "./components/CartHeader";
import { CartEmptyList } from "./components/EmptyList";
import { CartProductCard } from "./components/CartProductCard";

export function CartView({
  products,
  creditCards,
  isLoadingCreditCards,
  handleOpenCreditCardBottomSheet,
}: Readonly<ReturnType<typeof useCartViewModel>>) {
  return (
    <SafeAreaView className="flex-1">
      <FlatList
        data={products}
        keyExtractor={({ id }) => `product-cart-${id}`}
        renderItem={({ item }) => <CartProductCard product={item} />}
        contentContainerClassName="px-6 gap-2"
        ListHeaderComponent={<CartHeader />}
        ListHeaderComponentClassName="mb-6"
        ListEmptyComponent={<CartEmptyList />}
        ListFooterComponent={
          products.length > 0 ? (
            <CartFooter
              openCreditCardBottomSheet={handleOpenCreditCardBottomSheet}
              creditCards={creditCards}
              isLoading={isLoadingCreditCards}
            />
          ) : null
        }
        ListFooterComponentClassName="mt-6 items-center"
      />
    </SafeAreaView>
  );
}
