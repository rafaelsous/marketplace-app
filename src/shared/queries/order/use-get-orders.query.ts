import { useQuery } from "@tanstack/react-query";

import { getOrders } from "@/shared/services/order.service";

export function useGetOrdersQuery() {
  const query = useQuery({
    queryKey: ["user-orders"],
    queryFn: getOrders,
    staleTime: 1000 * 60 * 10,
  });

  return query;
}
