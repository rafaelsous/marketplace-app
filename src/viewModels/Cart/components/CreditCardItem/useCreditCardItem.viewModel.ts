import { format } from "date-fns";

import { CreditCard } from "@/shared/interfaces/credit-card";

export function useCreditCardItemViewModel(creditCard: CreditCard) {
  const formatedExpirationDate = format(creditCard.expirationDate, "MM/yyyy");
  const formatedCreditCardNumber = creditCard.number.slice(-4);

  return {
    formatedExpirationDate,
    formatedCreditCardNumber,
  };
}
