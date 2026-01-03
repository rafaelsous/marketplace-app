import { useState } from "react";
import { useForm } from "react-hook-form";
import { CameraType } from "expo-image-picker";
import { yupResolver } from "@hookform/resolvers/yup";

import { RegisterFormData, registerSchema } from "./register.schema";

import { useImage } from "@/shared/hooks/useImage";
import { useUserStore } from "@/shared/store/user-store";
import { useUserRegisterMutation } from "@/shared/queries/auth/user-register.mutation";
import { useUploadAvatarMutation } from "@/shared/queries/auth/use-upload-avatar.mutation";

export function useRegisterViewModel() {
  const [avatarUri, setAvatarUri] = useState<string | null>(null);

  const { updateUser } = useUserStore();
  const { handleSelectImage } = useImage({
    callback: setAvatarUri,
    cameraType: CameraType.front,
  });

  async function handleSelectAvatar() {
    await handleSelectImage();
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const uploadAvatarMutation = useUploadAvatarMutation();

  const userRegisterMutation = useUserRegisterMutation({
    onSuccess: async () => {
      if (avatarUri) {
        const { url } = await uploadAvatarMutation.mutateAsync(avatarUri);

        updateUser({ avatarUrl: url });
      }
    },
  });

  const onSubmit = handleSubmit(async (userData) => {
    const { passwordConfirm, ...registerData } = userData;

    await userRegisterMutation.mutateAsync(registerData);
  });

  return { control, errors, onSubmit, handleSelectAvatar, avatarUri };
}
