import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Text, TouchableOpacity } from "react-native";

import { useUserStore } from "@/shared/store/user-store";

import { HomeHeader } from "./components/Header";
import { SearchInput } from "./components/SearchInput";
import { ProductCard } from "./components/ProductCard";
import { useHomeViewModel } from "./useHome.viewModel";

export function HomeView({
  products,
  handleEndReached,
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
        onEndReached={handleEndReached}
        ListHeaderComponent={() => (
          <>
            <HomeHeader />
            <SearchInput />
          </>
        )}
        ListHeaderComponentClassName="gap-8"
        contentContainerClassName="px-4 pb-[120px]"
      />

      <TouchableOpacity onPress={logout} className="pb-16 self-center">
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
