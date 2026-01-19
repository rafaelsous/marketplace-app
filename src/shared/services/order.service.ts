import { marketPlaceApiClient } from "../api/marketplace";
import { OrdersResponse } from "../interfaces/http/orders-response";
import { CreateOrder, OrderResponse } from "../interfaces/http/create-order";

export async function createOrder(order: CreateOrder) {
  const { data } = await marketPlaceApiClient.post<OrderResponse>(
    "/orders",
    order,
  );

  return data;
}

export async function getOrders() {
  const { data } = await marketPlaceApiClient.get<OrdersResponse>("/orders");

  return data;
}
