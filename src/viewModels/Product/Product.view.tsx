import { FlatList, Text } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { useProductViewModel } from "./useProduct.viewModel";

export function ProductView({
  error,
  isLoading,
  productDetail,
}: Readonly<ReturnType<typeof useProductViewModel>>) {
  if (error) {
    return <Text>Houve um erro ao carregar detalhes do produto</Text>;
  }

  return (
    <SafeAreaView className="flex-1">
      <FlatList
        data={[]}
        renderItem={() => <></>}
        ListHeaderComponent={<Text>{productDetail?.name}</Text>}
      />
    </SafeAreaView>
  );
}
