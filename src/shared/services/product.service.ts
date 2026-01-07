import { marketPlaceApiClient } from "../api/marketplace";

import { ProductCategory } from "../interfaces/product";
import { ProductRequest } from "../interfaces/http/product";
import { ProductResponse } from "../interfaces/http/product-response";

export async function getProducts(params: ProductRequest) {
  const { data } = await marketPlaceApiClient.post<ProductResponse>(
    "/products",
    params
  );

  return data;
}

export async function getProductCategories() {
  const { data } = await marketPlaceApiClient.get<ProductCategory[]>(
    "/products/categories"
  );

  return data;
}
