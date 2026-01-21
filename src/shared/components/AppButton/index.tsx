import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { colors } from "@/styles/colors";

import { AppIcon, SolarIconName } from "../AppIcon";
import { buttonVariants, ButtonVariantsProps } from "./button.variants";

type Props = TouchableOpacityProps &
  ButtonVariantsProps & {
    leftIcon?: SolarIconName;
    rightIcon?: SolarIconName;
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
  className,
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
        {leftIcon && <AppIcon name={leftIcon} size={22} color={contentColor} />}

        <Text className={styles.text()}>{children}</Text>

        {rightIcon && (
          <AppIcon name={rightIcon} size={22} color={contentColor} />
        )}
      </>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={styles.base({ className })}
      disabled={isLoading}
      {...rest}
    >
      {renderContent()}
    </TouchableOpacity>
  );
}
