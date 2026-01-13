import { useEffect, useState } from "react";
import { Toast } from "toastify-react-native";

import { useBottomSheetStore } from "@/shared/store/bottomsheet-store";

import { useGetUserCommentQuery } from "@/shared/queries/comment/use-get-user-comment.query";
import { useCreateProductCommentMutation } from "@/shared/queries/comment/use-create-product-comment.mutation";
import { useUpdateProductCommentMutation } from "@/shared/queries/comment/use-update-product-comment.mutation";

interface RatingFormProps {
  content: string;
  rating: number;
  isEditing: boolean;
  commentId?: number;
}

const initialRatingFormValues: RatingFormProps = {
  content: "",
  rating: 0,
  isEditing: false,
  commentId: undefined,
};

export function useReviewBottomSheetViewModel(productId: number) {
  const [ratingForm, setRatingForm] = useState<RatingFormProps>(
    initialRatingFormValues
  );

  const { data: userComment, isLoading: isLoadingUserComment } =
    useGetUserCommentQuery(productId);

  const createProductCommentMutation =
    useCreateProductCommentMutation(productId);
  const updateProductCommentMutation = useUpdateProductCommentMutation(
    ratingForm.commentId!,
    productId
  );

  const { close: closeBottomSheet } = useBottomSheetStore();

  function handleRatingChange(rating: number) {
    setRatingForm((prevState) => ({
      ...prevState,
      rating,
    }));
  }

  function handleContentChange(content: string) {
    setRatingForm((prevState) => ({
      ...prevState,
      content,
    }));
  }

  function handleCloseBottomSheet() {
    closeBottomSheet();
  }

  async function handleSubmit() {
    if (ratingForm.rating === 0) {
      return Toast.warn("Por favor, selecione uma nota para o produto.", "top");
    }

    if (!ratingForm.content.trim()) {
      return Toast.warn(
        "Por favor, escreva uma avaliação para o produto.",
        "top"
      );
    }

    const { isEditing, ...formData } = ratingForm;

    if (isEditing) {
      updateProductCommentMutation.mutate({
        ...formData,
      });
    } else {
      createProductCommentMutation.mutate({
        content: formData.content,
        rating: formData.rating,
        productId,
      });
    }

    handleCloseBottomSheet();
  }

  const isLoading =
    createProductCommentMutation.isPending ||
    updateProductCommentMutation.isPending;

  useEffect(() => {
    if (userComment?.comment) {
      setRatingForm({
        isEditing: true,
        rating: userComment.rating,
        commentId: userComment.comment.id,
        content: userComment.comment.content,
      });
    } else {
      setRatingForm(initialRatingFormValues);
    }
  }, [userComment]);

  return {
    isLoading,
    ratingForm,
    isLoadingUserComment,
    handleSubmit,
    handleRatingChange,
    handleContentChange,
    handleCloseBottomSheet,
  };
}
