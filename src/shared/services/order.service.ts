import { marketPlaceApiClient } from "../api/marketplace";
import { CreateOrder, OrderResponse } from "../interfaces/http/create-order";

export async function createOrder(order: CreateOrder) {
  const { data } = await marketPlaceApiClient.post<OrderResponse>(
    "/orders",
    order,
  );

  return data;
}

export async function getOrders() {
  const { data } = await marketPlaceApiClient.get<OrderResponse>("/orders");

  return data;
}
