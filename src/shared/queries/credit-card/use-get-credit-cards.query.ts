import { useQuery } from "@tanstack/react-query";

import { getCreditCard } from "@/shared/services/credit-card.service";

export function useGetCreditCardsQuery() {
  const query = useQuery({
    queryKey: ["credit-cards"],
    queryFn: getCreditCard,
    staleTime: 1000 * 60 * 5,
  });

  return query;
}
