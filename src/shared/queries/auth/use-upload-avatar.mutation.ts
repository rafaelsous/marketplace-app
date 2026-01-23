import { Toast } from "toastify-react-native";
import { useMutation } from "@tanstack/react-query";

import { useUserStore } from "@/shared/store/user-store";
import { uploadAvatar } from "@/shared/services/auth.service";

export function useUploadAvatarMutation() {
  const { updateUser } = useUserStore();

  const mutation = useMutation({
    mutationFn: uploadAvatar,
    onSuccess: (response) => {
      updateUser({ avatarUrl: response.url });
    },
    onError: (error) => {
      console.log(error);
      Toast.error("Erro ao fazer upload da foto de perfil", "top");
    },
  });

  return mutation;
}
