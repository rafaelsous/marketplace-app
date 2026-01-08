import { Text, TouchableOpacity, View } from "react-native";

import { colors } from "@/styles/colors";

import { useBottomSheetStore } from "@/shared/store/bottomsheet-store";

import { Filter } from "../Filter";
import { AppIcon } from "@/shared/components/AppIcon";
import { AppInput } from "@/shared/components/AppInput";

interface SearchInputParams {
  inputValue: string;
  setSearchInputText: (text: string) => void;
}

export function SearchInput({
  inputValue,
  setSearchInputText,
}: Readonly<SearchInputParams>) {
  const { open } = useBottomSheetStore();

  return (
    <View className="gap-1">
      <Text className="text-2xl font-bold">Explore produtos</Text>

      <View className="flex-row gap-4">
        <View className="flex-1">
          <AppInput
            leftIcon="MagniferOutline"
            placeholder="Pesquisar"
            containerClassName="m-0  p-0 flex-1 text-lg"
            value={inputValue}
            onChangeText={setSearchInputText}
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          className="w-[48px] h-[48px] items-center justify-center self-end border border-purple-base rounded-xl"
          onPress={() => {
            open({
              content: <Filter />,
            });
          }}
        >
          <AppIcon
            name="FilterOutline"
            size={24}
            color={colors["purple-base"]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
