import { useCallback, useState } from "react";
import { Alert, Linking } from "react-native";
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
        Alert.alert(
          "Permissão negada",
          "Precisamos de permissão para acessar sua galeria de fotos",
          [
            {
              text: "Cancelar",
              style: "cancel",
            },
            {
              text: "Abrir configurações",
              onPress: () => {
                Linking.openSettings();
              },
            },
          ]
        );
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
