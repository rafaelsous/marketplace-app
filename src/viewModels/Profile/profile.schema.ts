import * as yup from "yup";

export const profileSchema: yup.ObjectSchema<{
  name: string;
  email: string;
  phone: string;
  password?: string;
  newPassword?: string;
}> = yup.object().shape({
  name: yup
    .string()
    .required("Nome é obrigatório")
    .min(4, "Nome deve ter pelo menos 4 caracteres"),
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  phone: yup
    .string()
    .required("Telefone é obrigatório")
    .matches(/^\d{11}$/, "Telefone deve ter 11 dígitos (DDD + número)"),
  password: yup.string().optional(),
  newPassword: yup
    .string()
    .optional()
    .min(6, "Senha deve ter pelo menos 6 caracteres"),
});

export type ProfileFormData = yup.InferType<typeof profileSchema>;
