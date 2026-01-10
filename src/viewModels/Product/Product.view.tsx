import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useProductViewModel } from "./useProduct.viewModel";

import { CommentItem } from "./components/CommentItem";
import { ProductHeader } from "./components/Header";

export function ProductView({
  error,
  isLoading,
  productDetails,
  getCommentsError,
  handleReached,
  handleRefetch,
  isLoadingComments,
  productComments,
}: Readonly<ReturnType<typeof useProductViewModel>>) {
  console.log(JSON.stringify(productComments));

  if (error) {
    return <Text>Houve um erro ao carregar detalhes do produto</Text>;
  }

  if (!productDetails) return null;

  return (
    <SafeAreaView className="flex-1 bg-background">
      <FlatList
        data={productComments}
        keyExtractor={({ id }) => `product-comment-${id}`}
        renderItem={({ item }) => <CommentItem comment={item} />}
        className="px-6"
        contentContainerClassName="pb-24 gap-2"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<ProductHeader productDetails={productDetails} />}
      />
    </SafeAreaView>
  );
}
