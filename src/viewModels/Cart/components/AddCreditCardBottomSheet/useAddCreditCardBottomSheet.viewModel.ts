import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useBottomSheetStore } from "@/shared/store/bottomsheet-store";
import { CreditCardFormData, creditCardSchema } from "./credit-card.schema";
import { useCreateCreditCardMutation } from "@/shared/queries/credit-card/use-create-credit-card.mutation";

export type FocusedField = "number" | "name" | "expiry" | "cvv";

function expirationDateMask(value: string) {
  const cleaned = value.replaceAll(/\D/g, "");

  if (cleaned.length < 2) {
    return cleaned;
  }

  const month = cleaned.slice(0, 2);
  const year = cleaned.slice(2, 4);

  if (year.length > 0) {
    return `${month}/${year}`;
  }

  return month;
}

function creditCardNumberMask(value: string) {
  const cleaned = value.replaceAll(/\D/g, "");

  return cleaned.replaceAll(/(\d{4})(?=\d)/g, "$1 ").trim();
}

function formatExpirationDateForApi(
  dateString: string,
  setError: (message: string) => void,
): string {
  const [month, year] = dateString.split("/").map(Number);

  if (month < 1 || month > 12) {
    setError("Mês inválido");
    throw new Error("Mês inválido");
  }

  if (month < 0 || month > 99) {
    setError("Ano inválido");
    throw new Error("Ano inválido");
  }

  const fullYear = 2000 + year;

  const expirationDate = new Date(fullYear, month, 0);
  const isoDate = expirationDate.toISOString().split("T")[0];

  return isoDate;
}

export function useAddCreditCardBottomSheetViewModel() {
  const [focusedField, setFocusedField] = useState<FocusedField | null>(null);

  const blurTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { close: closeBottomSheet } = useBottomSheetStore();
  const createCreditCardMutation = useCreateCreditCardMutation();

  const { reset, control, clearErrors, handleSubmit, setError, watch } =
    useForm<CreditCardFormData>({
      resolver: yupResolver(creditCardSchema),
      defaultValues: {
        titularName: "",
        number: "",
        expirationDate: "",
        CVV: "",
      },
    });

  const handleCreateCreditCard = handleSubmit(
    async ({ number, expirationDate: rawExpirationDate, CVV }) => {
      const cleanedCreditCardNumber = number.replaceAll(/\s/g, "");
      const expirationDate = formatExpirationDateForApi(
        rawExpirationDate,
        (message) =>
          setError("expirationDate", {
            message,
          }),
      );

      await createCreditCardMutation.mutateAsync({
        number: cleanedCreditCardNumber,
        expirationDate,
        CVV: Number(CVV),
      });

      closeBottomSheet();
    },
  );

  function handleCloseBottomSheet() {
    closeBottomSheet();
  }

  function handleFieldFocus(field: FocusedField) {
    if (blurTimeoutRef.current) {
      clearTimeout(blurTimeoutRef.current);
    }

    setFocusedField(field);
  }

  function handleFieldBlur() {
    blurTimeoutRef.current = setTimeout(() => {
      setFocusedField(null);
    }, 50);
  }

  const isFlipped = focusedField === "cvv";
  const watchedValue = watch();

  return {
    reset,
    control,
    isFlipped,
    clearErrors,
    focusedField,
    handleSubmit,
    handleFieldBlur,
    handleFieldFocus,
    expirationDateMask,
    creditCardNumberMask,
    handleCloseBottomSheet,
    handleCreateCreditCard,
    creditCardData: {
      number: watchedValue.number,
      name: watchedValue.titularName,
      expiry: watchedValue.expirationDate,
      cvv: watchedValue.CVV,
    },
  };
}
