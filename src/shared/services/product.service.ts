import { marketPlaceApiClient } from "../api/marketplace";

import { ProductRequest } from "../interfaces/http/product";
import { ProductComment } from "../interfaces/product-comment";
import { ProductCategory, Product } from "../interfaces/product";
import { ProductComments } from "../interfaces/http/product-comments";
import { PaginatedResponse } from "../interfaces/http/paginated-response";
import {
  CreateProductComment,
  CreateProductCommentResponse,
} from "../interfaces/http/create-product-comments";
import {
  UpdateProductComment,
  UpdateProductCommentResponse,
} from "../interfaces/http/update-product-comments";

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

export async function createProductComment(params: CreateProductComment) {
  const { data } =
    await marketPlaceApiClient.post<CreateProductCommentResponse>(
      "/products/create/comments",
      params
    );

  return data;
}

export async function getUserProductComment(productId: number) {
  const { data } = await marketPlaceApiClient.get<{
    comment: string;
    rating: number;
  }>(`/products/${productId}/user-comment`);

  return data;
}

export async function updateUserProductComment(
  commentId: number,
  params: UpdateProductComment
) {
  const { data } = await marketPlaceApiClient.put<UpdateProductCommentResponse>(
    `/products/comments/${commentId}`,
    params
  );

  return data;
}
