export interface UpdateProductComment {
  content: string;
  rating: number;
}

export interface UpdateProductCommentResponse {
  message: string;
  ratingUpdated: boolean;
  comment: {
    id: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;
  };
}
