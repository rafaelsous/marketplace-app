import { ComponentType } from "react";
import { SvgProps } from "react-native-svg";
import * as SolarIcons from "@solar-icons/react-native";

import { colors } from "@/styles/colors";

export type SolarIconName = keyof typeof SolarIcons;

interface AppIconProps {
  name: SolarIconName;
  size?: number;
  color?: string;
}

export function AppIcon({
  name,
  size,
  color = colors.gray[500],
}: Readonly<AppIconProps>) {
  const SolarIcon = SolarIcons[name] as ComponentType<SvgProps> | undefined;

  if (!SolarIcon) {
    console.warn(`[AppIcon] Ícone não encontrado: ${name}`);
    return null;
  }

  return <SolarIcon width={size} height={size} color={color} />;
}
