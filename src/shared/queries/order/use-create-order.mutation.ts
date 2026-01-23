import { Toast } from "toastify-react-native";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createOrder } from "@/shared/services/order.service";

export function useCreateOrderMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user-orders"],
      });
    },
    onError: (error) => {
      console.log(error);
      Toast.error(error.message ?? "Não foi possível criar o pedido", "top");
    },
  });

  return mutation;
}
