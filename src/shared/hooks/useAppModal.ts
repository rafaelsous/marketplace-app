import { createElement } from "react";
import { OutlineIconName } from "react-native-solar-icons/dist/icons";

import { useModalStore } from "../store/modal-store";

import { SelectionModal } from "../components/Modals/SelectionModal";

interface SelectionOption {
  text: string;
  icon: OutlineIconName;
  onPress: () => void;
  variant?: "primary" | "secondary" | "danger";
}

export function useAppModal() {
  const { open, close } = useModalStore();

  function showSelection(config: {
    title: string;
    message?: string;
    options: SelectionOption[];
  }) {
    open(createElement(SelectionModal));
  }

  return { showSelection };
}
