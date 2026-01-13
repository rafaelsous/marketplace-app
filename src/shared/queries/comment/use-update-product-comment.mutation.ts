import { Toast } from "toastify-react-native";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateUserProductComment } from "@/shared/services/product.service";
import { UpdateProductComment } from "@/shared/interfaces/http/update-product-comments";

export function useUpdateProductCommentMutation(
  commentId: number,
  productId: number
) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (params: UpdateProductComment) =>
      updateUserProductComment(commentId, params),
    onSuccess: (response) => {
      queryClient.invalidateQueries({
        queryKey: ["user-product-comment", productId],
      });
      queryClient.invalidateQueries({
        queryKey: ["product-comments", productId],
      });

      Toast.success(
        response.message || "Avaliação atualizada com sucesso!",
        "top"
      );
    },
    onError: (error) => {
      Toast.error(
        error.message ??
          "Não foi possível atualizar sua avaliação. Tente novamente mais tarde.",
        "top"
      );
    },
  });

  return mutation;
}
