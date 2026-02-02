import { useQuery } from "@tanstack/react-query";

import { getFavorites } from "@/shared/services/favorite.service";

export function useGetFavoritesQuery() {
  const query = useQuery({
    queryKey: ["favorites"],
    queryFn: getFavorites,
    staleTime: 1000 * 60 * 5,
  });

  return query;
}
