import { Toast } from "toastify-react-native";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createOrder } from "@/shared/services/order.service";

export function useCreateOrderMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createOrder,
    onSuccess: (response) => {
      queryClient.invalidateQueries({
        queryKey: ["user-orders"],
      });

      console.log(response);
    },
    onError: (error) => {
      console.log(error);
      Toast.error(error.message ?? "Não foi possível criar o pedido", "top");
    },
  });

  return mutation;
}
