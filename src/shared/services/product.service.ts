import { marketPlaceApiClient } from "../api/marketplace";

import { ProductRequest } from "../interfaces/http/product";
import { ProductComment } from "../interfaces/product-comment";
import { ProductCategory, Product } from "../interfaces/product";
import { ProductComments } from "../interfaces/http/product-comments";
import { PaginatedResponse } from "../interfaces/http/paginated-response";

export async function getProducts(params: ProductRequest) {
  const { data } = await marketPlaceApiClient.post<PaginatedResponse<Product>>(
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
  const { data } = await marketPlaceApiClient.get<Product>(
    `/products/${productId}`
  );

  return data;
}

export async function getProductComments(params: ProductComments) {
  const { data } = await marketPlaceApiClient.post<
    PaginatedResponse<ProductComment>
  >("/products/comments", params);

  return data;
}
