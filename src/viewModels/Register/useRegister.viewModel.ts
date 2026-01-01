import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { RegisterFormData, registerSchema } from "./register.schema";

import { useCamera } from "@/shared/hooks/useCamera";
import { useAppModal } from "@/shared/hooks/useAppModal";
import { useUserStore } from "@/shared/store/user-store";
import { useRegisterMutation } from "@/shared/queries/auth/user-register.mutation";

export function useRegisterViewModel() {
  const userRegisterMutation = useRegisterMutation();
  const { setSession } = useUserStore();
  const modals = useAppModal();
  const { openCamera } = useCamera({});

  function handleSelectAvatar() {
    modals.showSelection({
      title: "Selecionar foto",
      message: "Escolha uma opção:",
      options: [
        {
          text: "Galeria",
          icon: "GalleryWide",
          variant: "primary",
          onPress: () => alert("Galeria..."),
        },
        {
          text: "Câmera",
          icon: "Camera",
          variant: "primary",
          onPress: openCamera,
        },
      ],
    });
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
