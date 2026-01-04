import { createElement } from "react";

import { useModalStore } from "../store/modal-store";

import {
  SelectionModal,
  SelectionModalProps,
} from "../components/Modals/SelectionModal";
import { SolarIconName } from "../components/AppIcon";

export type SelectionVariant = "primary" | "secondary" | "danger";

export interface SelectionOption {
  text: string;
  icon: SolarIconName;
  onPress: () => void;
  variant?: SelectionVariant;
}

export function useAppModal() {
  const { open } = useModalStore();

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
