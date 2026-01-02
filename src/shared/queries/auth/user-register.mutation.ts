import { Toast } from "toastify-react-native";
import { useMutation } from "@tanstack/react-query";

import { useUserStore } from "@/shared/store/user-store";
import * as authService from "@/shared/services/auth.service";
import { RegisterRequest } from "@/shared/interfaces/http/register";

interface UserRegisterMutationParams {
  onSuccess?: () => void;
}

export function useUserRegisterMutation({
  onSuccess,
}: UserRegisterMutationParams = {}) {
  const { setSession } = useUserStore();

  const mutation = useMutation({
    mutationFn: (userData: RegisterRequest) => authService.register(userData),
    onSuccess: (response) => {
      setSession({
        user: response.user,
        token: response.token,
        refreshToken: response.refreshToken,
      });

      onSuccess?.();
    },
    onError: (error) => {
      console.log(error);
      Toast.error("Erro ao cadastrar usuário", "top");
    },
  });

  return mutation;
}
