import { useMutation } from "@tanstack/react-query";

import * as authService from "@/shared/services/auth.service";
import { LoginRequest } from "@/shared/interfaces/http/login";

export function useLoginMutation() {
  const mutation = useMutation({
    mutationFn: (loginData: LoginRequest) => authService.login(loginData),
    onSuccess: (response) => {
      console.log(response);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return mutation;
}
