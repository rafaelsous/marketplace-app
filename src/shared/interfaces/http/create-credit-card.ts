import { CreditCard } from "../credit-card";

export interface CreateCreditCard {
  number: string;
  CVV: number;
  expirationDate: Date;
}

export interface CreatedCreditCardResponse {
  success: boolean;
  message: string;
  data: CreditCard;
}
