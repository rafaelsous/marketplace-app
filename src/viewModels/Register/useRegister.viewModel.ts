import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { RegisterFormData, registerSchema } from "./register.schema";

import { useUserStore } from "@/shared/store/user-store";
import { useRegisterMutation } from "@/shared/queries/auth/user-register.mutation";
import { useImage } from "@/shared/hooks/useImage";

export function useRegisterViewModel() {
  const userRegisterMutation = useRegisterMutation();
  const { setSession } = useUserStore();
  const { handleSelectImage } = useImage({});

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

  return { control, errors, onSubmit, handleSelectAvatar };
}
