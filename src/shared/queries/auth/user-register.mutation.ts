import { useMutation } from "@tanstack/react-query";

import * as authService from "../../services/auth.service";
import { RegisterRequest } from "../../interfaces/http/register";

export function useRegisterMutation() {
  const mutation = useMutation({
    mutationFn: (userData: RegisterRequest) => authService.register(userData),
    onSuccess: (response) => {
      console.log(response);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return mutation;
}
