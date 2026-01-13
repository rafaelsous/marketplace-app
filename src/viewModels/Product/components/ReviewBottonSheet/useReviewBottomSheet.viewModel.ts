import { useEffect, useState } from "react";

import { useGetUserCommentQuery } from "@/shared/queries/comment/use-get-user-comment.query";

interface RatingFormProps {
  content: string;
  rating: number;
  isEditing: boolean;
}

const initialRatingFormValues: RatingFormProps = {
  content: "",
  rating: 0,
  isEditing: false,
};

export function useReviewBottomSheetViewModel(productId: number) {
  const [ratingForm, setRatingForm] = useState<RatingFormProps>(
    initialRatingFormValues
  );

  const { data: userComment, isLoading: isLoadingUserComment } =
    useGetUserCommentQuery(productId);

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

  useEffect(() => {
    if (userComment?.content && userComment?.rating) {
      setRatingForm({
        content: userComment.content,
        rating: userComment.rating,
        isEditing: false,
      });
    } else {
      setRatingForm(initialRatingFormValues);
    }
  }, [userComment]);

  return {
    ratingForm,
    isLoadingUserComment,
    handleRatingChange,
    handleContentChange,
  };
}
