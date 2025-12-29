import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { LoginFormData, loginSchema } from "./login.schema";

export function useLoginViewModel() {
  const { control, handleSubmit } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return { control };
}
