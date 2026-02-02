import { marketPlaceApiClient } from "../api/marketplace";

import { Favorite } from "../interfaces/http/favorite";

async function getFavorites(): Promise<Favorite[]> {
  const { data } = await marketPlaceApiClient.get<Favorite[]>("/favorites");

  return data;
}

async function addFavorite(productId: number) {
  await marketPlaceApiClient.post("/favorites", { productId });
}

async function removeFavorite(productId: number) {
  await marketPlaceApiClient.delete(`/favorites/${productId}`);
}
