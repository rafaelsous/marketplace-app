import { ImagePickerOptions } from "expo-image-picker";

import { useCamera } from "./useCamera";
import { useGallery } from "./useGallery";
import { useAppModal } from "./useAppModal";

export function useImage(pickerOptions: ImagePickerOptions) {
  const modals = useAppModal();
  const { openCamera, isLoading: cameraLoading } = useCamera(pickerOptions);
  const { openGallery, isLoading: galleryLoading } = useGallery(pickerOptions);

  const isLoading = Boolean(cameraLoading || galleryLoading);

  async function handleSelectImage(): Promise<void> {
    modals.showSelection({
      title: "Selecionar foto",
      message: "Escolha uma opção:",
      options: [
        {
          text: "Galeria",
          icon: "GalleryWide",
          variant: "primary",
          onPress: openGallery,
        },
        {
          text: "Câmera",
          icon: "Camera",
          variant: "primary",
          onPress: openCamera,
        },
      ],
    });
  }

  return { handleSelectImage, isLoading };
}
