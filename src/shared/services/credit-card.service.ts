import { marketPlaceApiClient } from "../api/marketplace";
import {
  CreateCreditCard,
  CreatedCreditCardResponse,
} from "../interfaces/http/create-credit-card";
import { CreditCard } from "../interfaces/credit-card";

export async function getCreditCard() {
  const { data } =
    await marketPlaceApiClient.get<CreditCard[]>("/credit-cards");

  return data;
}

export async function createCreditCard(creditCard: CreateCreditCard) {
  const { data } = await marketPlaceApiClient.post<CreatedCreditCardResponse>(
    "/credit-cards",
    creditCard
  );

  return data;
}
