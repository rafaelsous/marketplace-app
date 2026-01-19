import { useGetOrdersQuery } from "@/shared/queries/order/use-get-orders.query";

export function useOrdersViewModel() {
  const { data } = useGetOrdersQuery();

  const orders = data?.orders ?? [];

  return {
    orders,
  };
}
