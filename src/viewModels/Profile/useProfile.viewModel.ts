import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useUserStore } from "@/shared/store/user-store";
import { ProfileFormData, profileSchema } from "./profile.schema";

export function useProfileViewModel() {
  const { user } = useUserStore();
  const [avatarUri, setAvatarUri] = useState<string | null>(
    user?.avatarUrl ?? null,
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
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

  const onSubmit = handleSubmit(async () => {});

  async function handleSelectAvatar() {
    setAvatarUri("");
  }

  return {
    errors,
    control,
    onSubmit,
    avatarUri,
    handleSelectAvatar,
  };
}
