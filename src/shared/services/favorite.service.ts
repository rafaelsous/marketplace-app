import { marketPlaceApiClient } from "../api/marketplace";

import { Favorite, HandlerFavoriteResponse } from "../interfaces/http/favorite";

export async function getFavorites(): Promise<Favorite[]> {
  const { data } = await marketPlaceApiClient.get<Favorite[]>("/favorites");

  return data;
}

export async function addFavorite(productId: number) {
  const { data } = await marketPlaceApiClient.post<HandlerFavoriteResponse>(
    "/favorites",
    { productId },
  );

  return data;
}

export async function removeFavorite(productId: number) {
  await marketPlaceApiClient.delete<HandlerFavoriteResponse>(
    `/favorites/${productId}`,
  );
}
