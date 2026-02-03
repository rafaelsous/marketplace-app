import { useMemo } from "react";

import { useGetFavoritesQuery } from "@/shared/queries/favorite/use-get-favorites.query";

export function useFavoriteButtonViewModel(productId: number) {
  const { data: favorites = [] } = useGetFavoritesQuery();

  const isFavorite: boolean = useMemo(() => {
    return favorites.some(({ id }) => id === productId);
  }, [favorites, productId]);

  console.log(isFavorite);

  return {
    isFavorite,
  };
}
