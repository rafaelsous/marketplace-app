import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { OutlineIconName } from "react-native-solar-icons/dist/icons";

import { buttonVariants, ButtonVariantsProps } from "./button.variants";

type Props = TouchableOpacityProps &
  ButtonVariantsProps & {
    leftIcon?: OutlineIconName;
    children: string;
  };

export function AppButton({ leftIcon, children, ...rest }: Props) {
  const styles = buttonVariants();

  return (
    <TouchableOpacity activeOpacity={0.7} className={styles.base()} {...rest}>
      <Text className={styles.text()}>{children}</Text>
    </TouchableOpacity>
  );
}
