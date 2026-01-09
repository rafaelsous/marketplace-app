import { marketPlaceApiClient } from "../api/marketplace";

import { ProductRequest } from "../interfaces/http/product";
import { ProductCategory, ProductI } from "../interfaces/product";
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

export async function getProductDetails(productId: number) {
  const { data } = await marketPlaceApiClient.get<ProductI>(
    `/products/${productId}`
  );

  return data;
}
