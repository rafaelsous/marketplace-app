import { Pressable, Text, TextInput, TextInputProps, View } from "react-native";
import { SolarIcon } from "react-native-solar-icons";
import type { OutlineIconName } from "react-native-solar-icons/dist/icons/index.d.ts";

import { appInputVariants, AppInputVariantsProps } from "./input.variants";

type Props = TextInputProps &
  AppInputVariantsProps & {
    label?: string;
    leftIcon?: OutlineIconName;
    rightIcon?: OutlineIconName;
    containerClassName?: string;
    mask?: (value: string) => void | string;
  };

export function AppInput({
  label,
  leftIcon,
  rightIcon,
  containerClassName,
  mask,
  ...rest
}: Props) {
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
