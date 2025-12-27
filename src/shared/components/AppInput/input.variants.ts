import { tv, type VariantProps } from "tailwind-variants";

export const appInputVariants = tv({
  slots: {
    container: "w-full, my-4",
    wrapper: "pb-2 flex-row items-center border-b border-gray-200",
    input: "flex-1 text-base text-gray-500 bg-transparent",
    label: "mb-1 text-xs text-gray-300 font-semibold",
    error: "mt-1 text-sm text-danger",
  },
  variants: {
    isFocused: {
      true: {},
    },
    isError: {
      true: {},
    },
    isDisabled: {
      true: {},
    },
  },
  defaultVariants: {
    isFocused: false,
    isError: false,
    isDisabled: false,
  },
});

export type AppInputVariantsProps = VariantProps<typeof appInputVariants>;
