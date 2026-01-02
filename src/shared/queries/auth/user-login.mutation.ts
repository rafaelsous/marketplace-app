import { Toast } from "toastify-react-native";
import { useMutation } from "@tanstack/react-query";

import * as authService from "@/shared/services/auth.service";
import { LoginRequest } from "@/shared/interfaces/http/login";
import { useUserStore } from "@/shared/store/user-store";

export function useLoginMutation() {
  const { setSession } = useUserStore();

  const mutation = useMutation({
    mutationFn: (loginData: LoginRequest) => authService.login(loginData),
    onSuccess: (response) => {
      setSession(response);
    },
    onError: (error) => {
      console.log(error);
      Toast.error("Erro ao fazer login do usuário", "top");
    },
  });

  return mutation;
}
