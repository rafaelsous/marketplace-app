import { Platform } from "react-native";

export function getApiUrl() {
  const isAndroid = Platform.OS === "android";
  const isPhysicalDevice = true;

  if (isAndroid) {
    if (isPhysicalDevice) {
      return "http://192.168.10.104:3001";
    }

    return "http://10.0.2.2:3001";
  }

  return "http://localhost:3001";
}
