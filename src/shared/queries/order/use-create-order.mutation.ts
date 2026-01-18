import { Toast } from "toastify-react-native";
import { useMutation } from "@tanstack/react-query";

import { createOrder } from "@/shared/services/order.service";

export function useCreateOrderMutation() {
  const mutation = useMutation({
    mutationFn: createOrder,
    onSuccess: (response) => {
      console.log(response);
      Toast.error("Pedido criado com sucesso!", "top");
    },
    onError: (error) => {
      console.log(error);
      Toast.error(error.message ?? "Não foi possível criar o pedido", "top");
    },
  });

  return mutation;
}
