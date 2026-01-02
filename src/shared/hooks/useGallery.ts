import { useCallback, useState } from "react";
import { Toast } from "toastify-react-native";
import * as ImagePicker from "expo-image-picker";
import { ImagePickerOptions } from "expo-image-picker";

export function useGallery(pickerOptions: ImagePickerOptions) {
  const [isLoading, setIsLoading] = useState(false);

  const requestGalleryPermission = useCallback(async (): Promise<boolean> => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      const currentStatus = status === "granted";

      if (!currentStatus) {
        Toast.error("Precisamos da permissão para acessar suas fotos", "top");
      }

      return currentStatus;
    } catch (error) {
      console.log(error);
      Toast.error("Erro ao solicitar permissões da galeria", "top");

      return false;
    }
  }, []);

  const openGallery = useCallback(async (): Promise<string | null> => {
    try {
      setIsLoading(true);

      const hasPermission = await requestGalleryPermission();

      if (!hasPermission) return null;

      const result = await ImagePicker.launchImageLibraryAsync(pickerOptions);

      if (!result.canceled && result.assets && result.assets.length > 0) {
        Toast.success("Foto selecionada com sucesso", "top");

        return result.assets[0].uri;
      }

      return null;
    } catch (error) {
      console.log(error);
      Toast.error("Erro ao selecionar foto", "top");

      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { openGallery, isLoading };
}
