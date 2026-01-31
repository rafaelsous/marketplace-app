import Constants from "expo-constants";
import { Platform } from "react-native";

export const buildImageUrl = (originalUrl: string) => {
  if (Constants.expoConfig?.extra?.isProduction) {
    return originalUrl;
  }

  const isPhysicalDevice = process.env.EXPO_PUBLIC_IS_PHYSICAL_DEVICE;

  return Platform.select({
    android: originalUrl.replace(
      "localhost",
      isPhysicalDevice ? "192.168.10.104" : "10.0.2.2",
    ),
    ios: originalUrl,
  });
};
