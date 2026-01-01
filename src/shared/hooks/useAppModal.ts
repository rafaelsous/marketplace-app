import { createElement } from "react";
import { OutlineIconName } from "react-native-solar-icons/dist/icons";

import { useModalStore } from "../store/modal-store";

import {
  SelectionModal,
  SelectionModalProps,
} from "../components/Modals/SelectionModal";

export interface SelectionOption {
  text: string;
  icon: OutlineIconName;
  onPress: () => void;
  variant?: "primary" | "secondary" | "danger";
}

export function useAppModal() {
  const { open, close } = useModalStore();

  function showSelection({
    title,
    message,
    options,
  }: {
    title: string;
    message?: string;
    options: SelectionOption[];
  }) {
    open(
      createElement(SelectionModal, {
        title,
        message,
        options,
      } as SelectionModalProps)
    );
  }

  return { showSelection };
}
