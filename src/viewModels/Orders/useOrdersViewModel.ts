import { useGetOrdersQuery } from "@/shared/queries/order/use-get-orders.query";

export function useOrdersViewModel() {
  const { data, error, isLoading } = useGetOrdersQuery();

  const orders = data?.orders ?? [];

  return {
    error,
    orders,
    isLoading,
  };
}
