import { marketPlaceApiClient } from "../api/marketplace";
import { ProductResponse } from "../interfaces/http/product-response";

interface ProductRequest {
  pagination: {
    page: number;
    perPage: number;
  };
  filters: {
    from: Date;
    to: Date;
    categoryIds: number[];
    searchText: string;
    minValue: number;
    maxValue: number;
  };
  sort: {
    averageRating: string;
  };
}

export async function getProducts(params: ProductRequest) {
  const { data } = await marketPlaceApiClient.post<ProductResponse>(
    "/products",
    params
  );

  return data;
}
