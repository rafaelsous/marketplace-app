import { useCallback, useState } from "react";
import { Toast } from "toastify-react-native";
import * as ImagePicker from "expo-image-picker";

interface UseCameraOptions {
  aspect?: [number, number];
  quality?: number;
  allowsEditing?: boolean;
  exif?: boolean;
}

export function useCamera({
  aspect,
  quality,
  allowsEditing,
  exif,
}: UseCameraOptions) {
  const [isLoading, setIsLoading] = useState(false);

  const requestCameraPermission = useCallback(async (): Promise<boolean> => {
    try {
      const { status } = await ImagePicker.getCameraPermissionsAsync();

      const currentStatus = status === "granted";

      if (!currentStatus) {
        Toast.error("Precisamos da permissão para acessar sua câmera", "top");
      }

      return currentStatus;
    } catch (error) {
      console.log(error);
      Toast.error("Erro ao solicitar permissões da câmera", "top");
      return false;
    }
  }, []);

  const openCamera = useCallback(async (): Promise<string | null> => {
    setIsLoading(true);

    try {
      const hasPermission = await requestCameraPermission();

      if (!hasPermission) return null;

      const result = await ImagePicker.launchCameraAsync({
        aspect,
        quality,
        allowsEditing,
        exif,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        Toast.success("Foto capturada com sucesso", "top");
        return result.assets[0].uri;
      }

      return null;
    } catch (error) {
      console.log(error);
      Toast.error("Erro ao abrir câmera", "top");
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { openCamera, requestCameraPermission, isLoading };
}
