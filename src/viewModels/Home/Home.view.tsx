import { FlatList, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useUserStore } from "@/shared/store/user-store";

import { Header } from "./components/Header";

export function HomeView() {
  const { logout } = useUserStore();

  return (
    <SafeAreaView edges={["top"]} className="flex-1 gap-4">
      <FlatList
        data={[]}
        renderItem={() => <></>}
        ListHeaderComponent={() => <Header />}
        contentContainerClassName="px-4 pb-[120px]"
      />

      <TouchableOpacity onPress={logout} className="pb-16 self-center">
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
