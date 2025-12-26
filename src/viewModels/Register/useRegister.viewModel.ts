import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { RegisterFormData, registerSchema } from "./register.schema";
import { useRegisterMutation } from "../../shared/queries/auth/user-register.mutation";

export function useRegisterViewModel() {
  const userRegisterMutation = useRegisterMutation();

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

    await userRegisterMutation.mutateAsync(registerData);
  });

  return { control, errors, onSubmit };
}
