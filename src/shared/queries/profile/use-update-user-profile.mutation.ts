import { Toast } from "toastify-react-native";
import { useMutation } from "@tanstack/react-query";

import { useUserStore } from "@/shared/store/user-store";
import { updateUserProfile } from "@/shared/services/profile.service";

export function useUpdateUserProfileMutation() {
  const { updateUser } = useUserStore();

  const mutation = useMutation({
    mutationFn: updateUserProfile,
    onSuccess: (response) => {
      updateUser({ ...response.user });
    },
    onError: (error) => {
      console.log(error);
      Toast.error("Não foi possível atualizar o perfil do usuário", "top");
    },
  });

  return mutation;
}
