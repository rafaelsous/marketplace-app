import { marketPlaceApiClient } from "../api/marketplace";
import { CreditCardResponse } from "../interfaces/http/credit-card-response";

export async function getCreditCard() {
  const { data } =
    await marketPlaceApiClient.get<CreditCardResponse[]>("/credit-cards");

  return data;
}
