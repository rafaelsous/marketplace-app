import { Order, OrderResponse } from "../interfaces/order";
import { marketPlaceApiClient } from "../api/marketplace";

export async function createOrder(order: Order) {
  const { data } = await marketPlaceApiClient.post<OrderResponse>(
    "/orders",
    order,
  );

  return data;
}
