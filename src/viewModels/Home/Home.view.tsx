import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, RefreshControl, Text, TouchableOpacity } from "react-native";

import { colors } from "@/styles/colors";

import { useHomeViewModel } from "./useHome.viewModel";
import { useUserStore } from "@/shared/store/user-store";

import { Footer } from "./components/Footer";
import { ProductCard } from "./components/ProductCard";
import { RenderHeader } from "./components/RenderHeader";

export function HomeView({
  products,
  handleEndReached,
  hasNextPage,
  isLoading,
  isFetchingNextPage,
  handleRefresh,
  isRefetching,
  searchInputText,
  setSearchInputText,
}: Readonly<ReturnType<typeof useHomeViewModel>>) {
  const { logout } = useUserStore();

  return (
    <SafeAreaView edges={["top"]} className="flex-1 gap-4">
      <FlatList
        data={products}
        keyExtractor={({ id }) => `product-list-item-${id}`}
        numColumns={2}
        columnWrapperClassName="justify-between"
        renderItem={({ item }) => <ProductCard product={item} />}
        ListHeaderComponent={
          <RenderHeader
            searchInputText={searchInputText}
            setSearchInputText={setSearchInputText}
          />
        }
        ListFooterComponent={
          <Footer
            isLoading={hasNextPage && Boolean(isLoading || isFetchingNextPage)}
          />
        }
        onEndReached={handleEndReached}
        ListHeaderComponentClassName="gap-8"
        contentContainerClassName="px-4 pb-[120px]"
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            colors={[colors["purple-base"]]}
            tintColor={colors["purple-base"]}
            onRefresh={handleRefresh}
          />
        }
      />

      <TouchableOpacity onPress={logout} className="pb-16 self-center">
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
