import {
  Pressable,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

import { colors } from "@/styles/colors";

import { AppIcon, SolarIconName } from "../AppIcon";
import { useAppInputViewModel } from "./useAppInputViewModel";
import { appInputVariants, AppInputVariantsProps } from "./input.variants";

export type AppInputProps = TextInputProps &
  AppInputVariantsProps & {
    label?: string;
    leftIcon?: SolarIconName;
    rightIcon?: SolarIconName;
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
}: AppInputProps) {
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
    isDisabled,
    isError: !!error,
  });

  return (
    <View className={styles.container({ className: containerClassName })}>
      {label && <Text className={styles.label()}>{label}</Text>}

      <Pressable className={`${styles.wrapper()} gap-3`}>
        {leftIcon && (
          <AppIcon name={leftIcon} size={22} color={getIconColor()} />
        )}

        <TextInput
          className={styles.input()}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChangeText={handleTextChange}
          value={value}
          placeholderTextColor={colors.gray[200]}
          secureTextEntry={showPassword}
          {...rest}
        />

        {secureTextEntry && (
          <TouchableOpacity
            hitSlop={16}
            activeOpacity={0.7}
            onPress={handleToggleShowPassword}
          >
            <AppIcon
              name={showPassword ? "EyeOutline" : "EyeClosedOutline"}
              size={24}
              color={colors.gray[300]}
            />
          </TouchableOpacity>
        )}

        {rightIcon && (
          <AppIcon name={rightIcon} size={22} color={getIconColor()} />
        )}
      </Pressable>

      {error && (
        <View className="flex-row items-center gap-1">
          <AppIcon name="InfoCircleOutline" size={16} color={colors.danger} />
          <Text className={styles.error()}>{error}</Text>
        </View>
      )}
    </View>
  );
}
