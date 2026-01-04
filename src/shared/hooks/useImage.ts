import { ImagePickerOptions } from "expo-image-picker";

import { useCamera } from "./useCamera";
import { useGallery } from "./useGallery";
import { useAppModal } from "./useAppModal";

import { useModalStore } from "../store/modal-store";

interface UseImageParams extends ImagePickerOptions {
  callback: (uri: string | null) => void;
}

export function useImage({ callback, ...pickerOptions }: UseImageParams) {
  const modals = useAppModal();
  const { openCamera, isLoading: cameraLoading } = useCamera(pickerOptions);
  const { openGallery, isLoading: galleryLoading } = useGallery(pickerOptions);

  const isLoading = Boolean(cameraLoading || galleryLoading);

  const { close } = useModalStore();

  function handleCallback(uri: string | null) {
    close();

    callback(uri);
  }

  async function handleSelectImage(): Promise<void> {
    modals.showSelection({
      title: "Selecionar foto",
      message: "Escolha uma opção:",
      options: [
        {
          text: "Galeria",
          icon: "GalleryWideOutline",
          variant: "primary",
          onPress: async () => {
            const imageUri = await openGallery();
            handleCallback(imageUri);
          },
        },
        {
          text: "Câmera",
          icon: "CameraOutline",
          variant: "primary",
          onPress: async () => {
            const imageUri = await openCamera();
            handleCallback(imageUri);
          },
        },
      ],
    });
  }

  return { handleSelectImage, isLoading };
}
