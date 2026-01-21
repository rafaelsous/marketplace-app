import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useUserStore } from "@/shared/store/user-store";
import { useCartStore } from "@/shared/store/cart-store";
import { useModalStore } from "@/shared/store/modal-store";

import { useAppModal } from "@/shared/hooks/useAppModal";
import { ProfileFormData, profileSchema } from "./profile.schema";
import { useUpdateUserProfileMutation } from "@/shared/queries/profile/use-update-user-profile.mutation";

export function useProfileViewModel() {
  const { close } = useModalStore();
  const { clearCart } = useCartStore();
  const { user, logout } = useUserStore();

  const { showSelection } = useAppModal();
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

  function handleLogout() {
    showSelection({
      title: "Sair",
      message: "Deseja realmente sair da sua conta?",
      options: [
        {
          text: "Continuar logado",
          variant: "secondary",
          onPress: close,
        },
        {
          text: "Sair",
          variant: "danger",
          onPress: () => {
            clearCart();
            close();
            logout();
          },
        },
      ],
    });
  }

  return {
    errors,
    control,
    onSubmit,
    avatarUri,
    isSubmitting,
    handleLogout,
    handleSelectAvatar,
  };
}
