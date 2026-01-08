import { Text, View } from "react-native";
import { useAppPriceTextViewModel } from "./AppPriceText.viewModel";

export function AppPriceTextView({
  classNameValue,
  classNameCurrency,
  value,
  valueText,
  formatPrice,
  currencySymbol,
}: Readonly<
  ReturnType<typeof useAppPriceTextViewModel> & {
    classNameValue?: string;
    classNameCurrency?: string;
  }
>) {
  return (
    <View
      className="flex-row items-baseline gap-1"
      style={{ alignItems: "baseline" }}
    >
      <Text className={classNameCurrency ?? "text-sm text-gray-500"}>
        {currencySymbol}
      </Text>
      <Text className={classNameValue ?? "text-2xl text-gray-500 font-bold"}>
        {valueText}
      </Text>
    </View>
  );
}
