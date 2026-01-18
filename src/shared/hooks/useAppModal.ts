import { createElement } from "react";

import { useModalStore } from "../store/modal-store";

import {
  SelectionModal,
  SelectionModalProps,
} from "../components/Modals/SelectionModal";
import { SolarIconName } from "../components/AppIcon";
import {
  SuccessModal,
  SuccessModalProps,
} from "../components/Modals/SuccessModal";

export type SelectionVariant = "primary" | "secondary" | "danger";

export interface SelectionOption {
  text: string;
  icon: SolarIconName;
  onPress: () => void;
  variant?: SelectionVariant;
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
      } as SelectionModalProps),
    );
  }

  function showSuccess(config: SuccessModalProps) {
    open(
      createElement(SuccessModal, {
        ...config,
        onButtonPress: () => {
          if (config.onButtonPress) {
            config.onButtonPress();
          }

          close();
        },
      }),
    );
  }

  return { showSelection, showSuccess };
}
