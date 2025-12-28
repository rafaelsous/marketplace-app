import { useRef, useState } from "react";
import { BlurEvent, FocusEvent, TextInput } from "react-native";

import { colors } from "../../../styles/colors";

type Props = {
  isError?: boolean;
  isDisabled?: boolean;
  error?: string;
  secureTextEntry?: boolean;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: BlurEvent) => void;
  mask?: (text: string) => string | void;
  onChangeText?: (text: string) => string | void;
  value?: string;
};

export function useAppInputViewModel({
  isError,
  isDisabled,
  error,
  secureTextEntry,
  onFocus,
  onBlur,
  mask,
  onChangeText,
  value,
}: Props) {
  const [showPassword, setShowPassword] = useState(secureTextEntry);
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef<TextInput>(null);

  function handleToggleShowPassword() {
    setShowPassword((prevState) => !prevState);
  }

  function handleWrapperPress() {
    inputRef.current?.focus();
  }

  function handleFocus(event: FocusEvent) {
    setIsFocused(true);
    onFocus?.(event);
  }

  function handleBlur(event: BlurEvent) {
    setIsFocused(false);
    onBlur?.(event);
  }

  function getIconColor() {
    if (isFocused) return colors["purple-base"];
    if (isError) return colors.danger;
    if (value) return colors["purple-base"];

    return colors.gray[200];
  }

  function handleTextChange(text: string) {
    if (mask) {
      onChangeText?.(mask(text) || "");
    } else {
      onChangeText?.(text);
    }
  }

  return {
    handleToggleShowPassword,
    handleWrapperPress,
    handleFocus,
    handleBlur,
    getIconColor,
    showPassword,
    handleTextChange,
    isFocused,
  };
}
