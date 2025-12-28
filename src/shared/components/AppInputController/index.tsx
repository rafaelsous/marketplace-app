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
  ...rest
}: Readonly<Props<T>>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onBlur, onChange, value },
        fieldState: { error },
        formState: { isSubmitting },
      }) => (
        <AppInput
          onChangeText={onChange}
          value={value}
          onBlur={onBlur}
          error={error?.message}
          isDisabled={isSubmitting || rest.isDisabled}
          {...rest}
        />
      )}
    />
  );
}
