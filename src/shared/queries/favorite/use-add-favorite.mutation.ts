import { Toast } from "toastify-react-native";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addFavorite } from "@/shared/services/favorite.service";

export function useAddFavoriteMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addFavorite,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["favorites"],
      });

      Toast.success("Produto adicionado aos favoritos", "bottom");
    },
    onError: (error) => {
      Toast.error(
        error.message || "Falha ao adicionar produto aos favoritos",
        "bottom",
      );
    },
  });

  return mutation;
}
