import { CreateCreditCard } from "@/shared/interfaces/http/create-credit-card";
import { useCreateCreditCardMutation } from "@/shared/queries/credit-card/use-create-credit-card.mutation";

export function useAddCreditCardBottomSheetViewModel() {
  const createCreditCardMutation = useCreateCreditCardMutation();

  async function handleCreateCreditCard(creditCard: CreateCreditCard) {
    await createCreditCardMutation.mutateAsync(creditCard);
  }

  return { handleCreateCreditCard };
}
