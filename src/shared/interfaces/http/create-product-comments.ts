export interface CreateProductComment {
  productId: number;
  content: string;
  rating: number;
}

export interface CreateProductCommentResponse {
  message: string;
  ratingApplied: boolean;
}

export interface GetUserProductCommentResponse {
  comment: {
    id: number;
    content: string;
    createdAt: Date;
    user: {
      id: number;
      name: string;
    };
  };
  rating: number;
}
