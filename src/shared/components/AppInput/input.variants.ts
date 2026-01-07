import { tv, type VariantProps } from "tailwind-variants";

export const appInputVariants = tv({
  slots: {
    container: "w-full",
    wrapper: "pb-2 flex-row items-center border-b border-gray-200",
    input: "flex-1 text-base text-gray-500 bg-transparent",
    label: "mb-1 text-xs text-gray-300 font-semibold uppercase",
    error: "mt-1 text-sm text-danger",
  },
  variants: {
    isFocused: {
      true: {
        wrapper: "border-purple-base",
        label: "text-purple-base",
      },
    },
    isError: {
      true: {
        wrapper: "border-danger",
        label: "text-danger",
      },
    },
    isDisabled: {
      true: {
        wrapper: "opacity-50",
        label: "text-gray-300",
      },
    },
  },
  defaultVariants: {
    isFocused: false,
    isError: false,
    isDisabled: false,
  },
});

export type AppInputVariantsProps = VariantProps<typeof appInputVariants>;
