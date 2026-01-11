import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useProductViewModel } from "./useProduct.viewModel";

import { Loading } from "./components/Loading";
import { EmtpyList } from "./components/EmptyList";
import { ProductHeader } from "./components/Header";
import { ListFooter } from "./components/ListFooter";
import { CommentItem } from "./components/CommentItem";
import { ProductDetailError } from "./components/Error";
import { AddToCartFooter } from "./components/AddToCartFooter";

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
  if (error) return <ProductDetailError />;

  if (!productDetails) return null;

  if (isLoading || !productDetails) return <Loading />;

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-background">
      <FlatList
        data={productComments}
        keyExtractor={({ id }) => `product-comment-${id}`}
        renderItem={({ item }) => <CommentItem comment={item} />}
        className="px-6"
        contentContainerStyle={{ paddingBottom: 24, gap: 12 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<ProductHeader productDetails={productDetails} />}
        ListFooterComponent={<ListFooter isLoadingMore={isFetchingNextPage} />}
        ListEmptyComponent={<EmtpyList isLoadingComments={isLoadingComments} />}
        onEndReached={handleReached}
        onRefresh={handleRefetch}
        refreshing={isRefetching}
      />

      <AddToCartFooter product={productDetails} />
    </SafeAreaView>
  );
}
