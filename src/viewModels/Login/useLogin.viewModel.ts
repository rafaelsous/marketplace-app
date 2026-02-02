import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { LoginFormData, loginSchema } from "./login.schema";

import { useOneSignal } from "@/shared/hooks/useOneSignal";
import { useLoginMutation } from "@/shared/queries/auth/user-login.mutation";

export function useLoginViewModel() {
  const loginMutation = useLoginMutation();

  const { playerId } = useOneSignal();

  const { control, handleSubmit } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit(async (loginFormData) => {
    await loginMutation.mutateAsync({
      ...loginFormData,
      notificationToken: playerId,
    });
  });

  return { control, onSubmit };
}
