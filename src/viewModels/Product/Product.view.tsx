import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useProductViewModel } from "./useProduct.viewModel";

import { Loading } from "./components/Loading";
import { EmtpyList } from "./components/EmptyList";
import { ProductHeader } from "./components/Header";
import { ListFooter } from "./components/ListFooter";
import { CommentItem } from "./components/CommentItem";

export function ProductView({
  error,
  isLoading,
  productDetails,
  getCommentsError,
  handleReached,
  handleRefetch,
  isLoadingComments,
  productComments,
  isRefetching,
  isFetchingNextPage,
}: Readonly<ReturnType<typeof useProductViewModel>>) {
  console.log(JSON.stringify(productComments));

  if (error) {
    return <Text>Houve um erro ao carregar detalhes do produto</Text>;
  }

  if (!productDetails) return null;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SafeAreaView className="flex-1 bg-background">
      <FlatList
        data={productComments}
        keyExtractor={({ id }) => `product-comment-${id}`}
        renderItem={({ item }) => <CommentItem comment={item} />}
        className="px-6"
        contentContainerClassName="pb-24 gap-3"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<ProductHeader productDetails={productDetails} />}
        ListFooterComponent={<ListFooter isLoadingMore={isFetchingNextPage} />}
        ListEmptyComponent={<EmtpyList isLoadingComments={isLoadingComments} />}
        onEndReached={handleReached}
        onRefresh={handleRefetch}
        refreshing={isRefetching}
      />
    </SafeAreaView>
  );
}
