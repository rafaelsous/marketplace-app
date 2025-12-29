import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { LoginFormData, loginSchema } from "./login.schema";
import { useLoginMutation } from "@/shared/queries/auth/user-login.mutation";
import { useUserStore } from "@/shared/store/user-store";

export function useLoginViewModel() {
  const { user } = useUserStore();

  console.log(user);

  const loginMutation = useLoginMutation();

  const { control, handleSubmit } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit(async (loginFormData) => {
    const userData = await loginMutation.mutateAsync(loginFormData);

    console.log(userData);
  });

  return { control, onSubmit };
}
