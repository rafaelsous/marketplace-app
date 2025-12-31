import { tv, VariantProps } from "tailwind-variants";

export enum AppButtonVariantsEnum {
  FILLED = "filled",
  OUTLINED = "outlined",
}

export const buttonVariants = tv({
  slots: {
    base: "w-full h-[48px] px-4 flex-row items-center border border-gray-300 rounded-[10px]",
    text: "text-base font-semibold",
    icon: "",
  },
  variants: {
    hasIcon: {
      true: {
        base: "justify-between",
      },
      false: {
        base: "justify-center",
      },
    },
    isLoading: {
      true: {
        base: "opacity-60",
      },
    },
    isDisabled: {
      true: {
        base: "opacity-50",
      },
    },
    variant: {
      filled: {
        base: "bg-purple-base border-purple-base",
        text: "text-white",
      },
      outlined: {
        base: "bg-transparent border-purple-base",
        text: "text-purple-base",
      },
    },
  },
  defaultVariants: {
    hasIcon: false,
    isLoading: false,
    isDisabled: false,
    variant: AppButtonVariantsEnum.FILLED,
  },
});

export type ButtonVariantsProps = VariantProps<typeof buttonVariants>;
