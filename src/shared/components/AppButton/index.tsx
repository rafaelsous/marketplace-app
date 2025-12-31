import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { buttonVariants, ButtonVariantsProps } from "./button.variants";

type Props = TouchableOpacityProps & ButtonVariantsProps & {};

export function AppButton({ ...rest }: Props) {
  const styles = buttonVariants();

  return (
    <TouchableOpacity activeOpacity={0.7} className={styles.base()} {...rest}>
      <Text>Teste</Text>
    </TouchableOpacity>
  );
}
