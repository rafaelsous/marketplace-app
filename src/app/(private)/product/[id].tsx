import { useLocalSearchParams } from "expo-router";

import { ProductView } from "@/viewModels/Product/Product.view";
import { useProductViewModel } from "@/viewModels/Product/useProduct.viewModel";

export default function ProductDetails() {
  const { id, openFeedbackBottomSheet } = useLocalSearchParams<{
    id: string;
    openFeedbackBottomSheet?: string;
  }>();

  console.log(openFeedbackBottomSheet);

  const viewModel = useProductViewModel(
    Number(id),
    Boolean(openFeedbackBottomSheet),
  );

  return <ProductView {...viewModel} />;
}
