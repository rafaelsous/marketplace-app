import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { CreditCardFormData, creditCardSchema } from "./credit-card.schema";
import { CreateCreditCard } from "@/shared/interfaces/http/create-credit-card";
import { useCreateCreditCardMutation } from "@/shared/queries/credit-card/use-create-credit-card.mutation";

export function useAddCreditCardBottomSheetViewModel() {
  const createCreditCardMutation = useCreateCreditCardMutation();

  const { reset, control, clearErrors, handleSubmit } =
    useForm<CreditCardFormData>({
      resolver: yupResolver(creditCardSchema),
      defaultValues: {
        titularName: "",
        number: "",
        expirationDate: "",
        CVV: "",
      },
    });

  async function handleCreateCreditCard(creditCard: CreateCreditCard) {
    await createCreditCardMutation.mutateAsync(creditCard);
  }

  return {
    reset,
    control,
    clearErrors,
    handleSubmit,
    handleCreateCreditCard,
  };
}
