import { FavoriteButtonView } from "./FavoriteButton.view";
import { useFavoriteButtonViewModel } from "./useFavoriteButton.viewModel";

interface FavoriteButtonProps {
  productId: number;
}

export function FavoriteButton({ productId }: Readonly<FavoriteButtonProps>) {
  const viewModel = useFavoriteButtonViewModel(productId);

  return <FavoriteButtonView {...viewModel} />;
}
