import { useState } from "react";
import { useForm } from "react-hook-form";
import { CameraType } from "expo-image-picker";
import { yupResolver } from "@hookform/resolvers/yup";

import { RegisterFormData, registerSchema } from "./register.schema";

import { useImage } from "@/shared/hooks/useImage";
import { useUserStore } from "@/shared/store/user-store";
import { useRegisterMutation } from "@/shared/queries/auth/user-register.mutation";

export function useRegisterViewModel() {
  const [avatarUri, setAvatarUri] = useState<string | null>(null);
  const userRegisterMutation = useRegisterMutation();
  const { setSession } = useUserStore();
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

  const onSubmit = handleSubmit(async (userData) => {
    const { passwordConfirm, ...registerData } = userData;

    const mutationResponse = await userRegisterMutation.mutateAsync(
      registerData
    );
    setSession({
      user: mutationResponse.user,
      token: mutationResponse.token,
      refreshToken: mutationResponse.refreshToken,
    });
  });

  return { control, errors, onSubmit, handleSelectAvatar, avatarUri };
}
