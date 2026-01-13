import { ReviewBottomSheetView } from "./ReviewBottomSheet.view";
import { useReviewBottomSheetViewModel } from "./useReviewBottomSheet.viewModel";

interface ReviewBottomSheetProps {
  productId: number;
}

export function ReviewBottomSheet({
  productId,
}: Readonly<ReviewBottomSheetProps>) {
  const viewModel = useReviewBottomSheetViewModel(productId);

  return <ReviewBottomSheetView {...viewModel} />;
}
