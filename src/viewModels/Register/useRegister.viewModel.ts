import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useUserStore } from "../../shared/store/user-store";
import { RegisterFormData, registerSchema } from "./register.schema";
import { useRegisterMutation } from "../../shared/queries/auth/user-register.mutation";

export function useRegisterViewModel() {
  const userRegisterMutation = useRegisterMutation();
  const { setSession } = useUserStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: "John Doe",
      email: "teste@email.com",
      phone: "11111111111",
      password: "123123",
      passwordConfirm: "123123",
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

  return { control, errors, onSubmit };
}
