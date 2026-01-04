import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Text, TouchableOpacity } from "react-native";

import { useUserStore } from "@/shared/store/user-store";

import { productList } from "@/shared/mocks/products-data";

import { HomeHeader } from "./components/Header";
import { SearchInput } from "./components/SearchInput";
import { ProductCard } from "./components/ProductCard";

export function HomeView() {
  const { logout } = useUserStore();

  return (
    <SafeAreaView edges={["top"]} className="flex-1 gap-4">
      <FlatList
        data={productList}
        keyExtractor={({ id }) => `product-list-item-${id}`}
        renderItem={({ item }) => <ProductCard product={item} />}
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
