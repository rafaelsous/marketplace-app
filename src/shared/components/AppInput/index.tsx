import { Pressable, Text, TextInput, TextInputProps, View } from "react-native";
import { SolarIcon } from "react-native-solar-icons";
import type { OutlineIconName } from "react-native-solar-icons/dist/icons/index.d.ts";

import { appInputVariants, AppInputVariantsProps } from "./input.variants";
import { useAppInputViewModel } from "./useAppInputViewModel";

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

  const styles = appInputVariants();

  return (
    <View className={styles.container({ className: containerClassName })}>
      <Text className={styles.label()}>Label</Text>

      <Pressable className={styles.wrapper()}>
        <SolarIcon name="KeyMinimalisticSquare2" size={22} type="outline" />

        <TextInput className={styles.input()} {...rest} />

        <SolarIcon name="Eye" size={22} type="outline" />
      </Pressable>
    </View>
  );
}
