import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useUserStore } from "@/shared/store/user-store";
import { ProfileFormData, profileSchema } from "./profile.schema";
import { useUpdateUserProfileMutation } from "@/shared/queries/profile/use-update-user-profile.mutation";

export function useProfileViewModel() {
  const { user } = useUserStore();
  const [avatarUri, setAvatarUri] = useState<string | null>(
    user?.avatarUrl ?? null,
  );

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormData>({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      name: user?.name ?? "",
      email: user?.email ?? "",
      phone: user?.phone ?? "",
      password: undefined,
      newPassword: undefined,
    },
  });

  const updateUserProfileMutation = useUpdateUserProfileMutation();

  function validatePasswords(userData: ProfileFormData) {
    if (!userData.password) return true;

    if (
      userData.password === userData.newPassword &&
      userData.password.length > 0
    ) {
      return false;
    }

    return true;
  }

  const onSubmit = handleSubmit(async (userData) => {
    if (!validatePasswords(userData)) return;

    await updateUserProfileMutation.mutateAsync(userData);
  });

  async function handleSelectAvatar() {
    setAvatarUri("");
  }

  return {
    errors,
    control,
    onSubmit,
    avatarUri,
    isSubmitting,
    handleSelectAvatar,
  };
}
