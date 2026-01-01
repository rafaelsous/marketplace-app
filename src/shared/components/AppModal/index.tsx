import { Modal, TouchableWithoutFeedback, View } from "react-native";

import { useModalStore } from "@/shared/store/modal-store";

export function AppModal() {
  const { isOpen, content, config, close } = useModalStore();

  if (!isOpen || !content) {
    return null;
  }

  return (
    <Modal
      visible={isOpen}
      animationType={config.animationType}
      transparent={config.statusBarTranslucent}
      onRequestClose={close}
    >
      <TouchableWithoutFeedback onPress={close}>
        <View className="px-6 flex-1 items-center justify-center bg-black/60">
          <TouchableWithoutFeedback onPress={() => {}}>
            {content}
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
