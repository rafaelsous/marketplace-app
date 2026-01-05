import { marketPlaceApiClient } from "../api/marketplace";
import { ProductRequest } from "../interfaces/http/product";
import { ProductResponse } from "../interfaces/http/product-response";

export async function getProducts(params: ProductRequest) {
  const { data } = await marketPlaceApiClient.post<ProductResponse>(
    "/products",
    params
  );

  return data;
}
