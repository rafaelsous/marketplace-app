import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
} from "react-hook-form";

import { AppInput, AppInputProps } from "../AppInput";

interface Props<T extends FieldValues>
  extends Omit<AppInputProps, "value" | "onchangeText" | "error"> {
  control: Control<T>;
  name: Path<T>;
  errors?: FieldErrors<T>;
}

export function AppInputController<T extends FieldValues>({
  name,
  control,
  errors,
}: Readonly<Props<T>>) {
  return (
    <Controller name={name} control={control} render={() => <AppInput />} />
  );
}
