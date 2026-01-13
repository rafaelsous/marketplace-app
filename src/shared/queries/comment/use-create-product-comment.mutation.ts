import { Toast } from "toastify-react-native";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createProductComment } from "@/shared/services/product.service";
import { CreateProductComment } from "@/shared/interfaces/http/create-product-comments";

export function useCreateProductCommentMutation(productId: number) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (params: CreateProductComment) =>
      createProductComment(params),
    onSuccess: (response) => {
      queryClient.invalidateQueries({
        queryKey: ["user-product-comment", productId],
      });
      queryClient.invalidateQueries({
        queryKey: ["product-comments", productId],
      });

      Toast.success(
        response.message || "Avaliação enviada com sucesso!",
        "top"
      );
    },
    onError: (error) => {
      Toast.error(
        error.message ??
          "Não foi possível enviar sua avaliação. Tente novamente mais tarde.",
        "top"
      );
    },
  });

  return mutation;
}
