import { AppPriceTextView } from "./AppPriceText.view";
import { useAppPriceTextViewModel } from "./AppPriceText.viewModel";

interface AppPriceTextParams {
  classNameCurrency?: string;
  classNameValue?: string;
  value: number;
}

export function AppPriceText({
  value,
  classNameValue,
  classNameCurrency,
}: Readonly<AppPriceTextParams>) {
  const viewModel = useAppPriceTextViewModel(value);

  return (
    <AppPriceTextView
      {...viewModel}
      classNameValue={classNameValue}
      classNameCurrency={classNameCurrency}
    />
  );
}
