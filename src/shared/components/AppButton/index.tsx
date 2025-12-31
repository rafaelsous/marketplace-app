import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { SolarIcon } from "react-native-solar-icons";
import { OutlineIconName } from "react-native-solar-icons/dist/icons";

import { colors } from "@/styles/colors";

import { buttonVariants, ButtonVariantsProps } from "./button.variants";

type Props = TouchableOpacityProps &
  ButtonVariantsProps & {
    leftIcon?: OutlineIconName;
    rightIcon?: OutlineIconName;
    children: string;
  };

export function AppButton({
  leftIcon,
  rightIcon,
  children,
  hasIcon,
  isLoading,
  isDisabled,
  variant = "filled",
  ...rest
}: Props) {
  const contentColor =
    variant === "filled" ? colors.white : colors["purple-base"];

  const styles = buttonVariants({
    hasIcon: !!leftIcon || !!rightIcon,
    isLoading,
    isDisabled,
    variant,
  });

  function renderContent() {
    if (isLoading) {
      return <ActivityIndicator size={"small"} color={contentColor} />;
    }

    return (
      <>
        {leftIcon && (
          <SolarIcon
            name={leftIcon}
            size={22}
            color={contentColor}
            type="outline"
          />
        )}

        <Text className={styles.text()}>{children}</Text>

        {rightIcon && (
          <SolarIcon
            name={rightIcon}
            size={22}
            color={contentColor}
            type="outline"
          />
        )}
      </>
    );
  }

  return (
    <TouchableOpacity activeOpacity={0.7} className={styles.base()} {...rest}>
      {renderContent()}
    </TouchableOpacity>
  );
}
