import { useMemo } from "react";

import { useGetFavoritesQuery } from "@/shared/queries/favorite/use-get-favorites.query";
import { useAddFavoriteMutation } from "@/shared/queries/favorite/use-add-favorite.mutation";
import { useRemoveFavoriteMutation } from "@/shared/queries/favorite/use-remove-favorite.mutation";

export function useFavoriteButtonViewModel(productId: number) {
  const { data: favorites = [], isLoading: isLoadingFavorites } =
    useGetFavoritesQuery();

  const isFavorite: boolean = useMemo(() => {
    return favorites.some(({ productId: id }) => id === productId);
  }, [favorites, productId]);

  const addFavoriteMutation = useAddFavoriteMutation();
  const removeFavoriteMutation = useRemoveFavoriteMutation();

  async function handleToggleFavorite() {
    if (isLoadingFavorites) return;

    if (isFavorite) {
      await removeFavoriteMutation.mutateAsync(productId);
    } else {
      await addFavoriteMutation.mutateAsync(productId);
    }
  }

  const isLoading =
    addFavoriteMutation.isPending ||
    removeFavoriteMutation.isPending ||
    isLoadingFavorites;

  return {
    isLoading,
    isFavorite,
    handleToggleFavorite,
  };
}
