import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { CreditCardFormData, creditCardSchema } from "./credit-card.schema";
import { CreateCreditCard } from "@/shared/interfaces/http/create-credit-card";
import { useCreateCreditCardMutation } from "@/shared/queries/credit-card/use-create-credit-card.mutation";

function expirationDateMask(value: string) {
  const cleaned = value.replaceAll(/\D/g, "");

  if (cleaned.length < 2) {
    return cleaned;
  }

  const month = cleaned.slice(0, 2);
  const year = cleaned.slice(2, 4);

  if (year.length > 0) {
    return `${month}/${year}`;
  }

  return month;
}

function creditCardNumberMask(value: string) {
  const cleaned = value.replaceAll(/\D/g, "");

  return cleaned.replaceAll(/(\d{4})(?=\d)/g, "$1 ").trim();
}

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
    expirationDateMask,
    creditCardNumberMask,
    handleCreateCreditCard,
  };
}
