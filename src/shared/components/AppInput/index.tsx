import { Pressable, Text, TextInput, TextInputProps, View } from "react-native";
import { SolarIcon } from "react-native-solar-icons";
import type { OutlineIconName } from "react-native-solar-icons/dist/icons/index.d.ts";

import { appInputVariants, AppInputVariantsProps } from "./input.variants";
import { useAppInputViewModel } from "./useAppInputViewModel";
import { colors } from "../../../styles/colors";

type Props = TextInputProps &
  AppInputVariantsProps & {
    label?: string;
    leftIcon?: OutlineIconName;
    rightIcon?: OutlineIconName;
    containerClassName?: string;
    mask?: (value: string) => void | string;
    error?: string;
  };

export function AppInput({
  label,
  leftIcon,
  rightIcon,
  containerClassName,
  value,
  isError,
  isDisabled,
  secureTextEntry,
  onFocus,
  onBlur,
  onChangeText,
  mask,
  error,
  ...rest
}: Props) {
  const {
    getIconColor,
    handleBlur,
    handleFocus,
    handleToggleShowPassword,
    handleWrapperPress,
    showPassword,
    handleTextChange,
    isFocused,
  } = useAppInputViewModel({
    error,
    onFocus,
    onBlur,
    isError: !!error,
    mask,
    onChangeText,
    isDisabled,
    secureTextEntry,
    value,
  });

  const styles = appInputVariants({
    isFocused,
  });

  return (
    <View className={styles.container({ className: containerClassName })}>
      <Text className={styles.label()}>{label}</Text>

      <Pressable className={`${styles.wrapper()} gap-3`}>
        {leftIcon && (
          <SolarIcon
            name={leftIcon}
            size={22}
            color={getIconColor()}
            type="outline"
          />
        )}

        <TextInput
          className={styles.input()}
          onBlur={handleBlur}
          onFocus={handleFocus}
          placeholderTextColor={colors.gray[200]}
          {...rest}
        />

        {rightIcon && (
          <SolarIcon
            name={rightIcon}
            size={22}
            color={getIconColor()}
            type="outline"
          />
        )}
      </Pressable>
    </View>
  );
}
