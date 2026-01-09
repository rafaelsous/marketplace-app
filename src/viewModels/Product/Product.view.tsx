import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useProductViewModel } from "./useProduct.viewModel";

import { ProductHeader } from "./components/Header";

export function ProductView({
  error,
  isLoading,
  productDetails,
}: Readonly<ReturnType<typeof useProductViewModel>>) {
  if (error) {
    return <Text>Houve um erro ao carregar detalhes do produto</Text>;
  }

  if (!productDetails) return null;

  return (
    <SafeAreaView className="flex-1">
      <FlatList
        data={[]}
        renderItem={() => <></>}
        className="px-6"
        ListHeaderComponent={<ProductHeader productDetails={productDetails} />}
      />
    </SafeAreaView>
  );
}
