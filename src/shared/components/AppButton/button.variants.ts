import { tv, VariantProps } from "tailwind-variants";

export const buttonVariants = tv({
  slots: {
    base: "w-full h-[48px] px-4 flex-row items-center border border-gray-300 rounded-[10px]",
  },
  variants: {},
  defaultVariants: {},
});

export type ButtonVariantsProps = VariantProps<typeof buttonVariants>;
