import { Toast } from "toastify-react-native";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createCreditCard } from "@/shared/services/credit-card.service";
import { CreateCreditCard } from "./../../interfaces/http/create-credit-card";

export function useCreateCreditCardMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (creditCard: CreateCreditCard) => createCreditCard(creditCard),
    onSuccess: (response) => {
      Toast.success(response.message ?? "Cartão criado com sucesso", "top");

      queryClient.invalidateQueries({
        queryKey: ["credit-cards"],
      });
    },
    onError: (error) => {
      console.log(error);
      Toast.error("Não foi possível criar o cartão");
    },
  });

  return mutation;
}
