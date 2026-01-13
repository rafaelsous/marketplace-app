export interface CreateProductComment {
  productId: number;
  content: string;
  rating: number;
}

export interface CreateProductCommentResponse {
  message: string;
  ratingApplied: boolean;
}
