import { useEffect } from "react";
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

function formatCreditCardNumber(creditCardNumber: string) {
  const cleaned = creditCardNumber.replaceAll(/\s/g, "");

  // const padded = cleaned.padEnd(16, "•");
  const padded = cleaned.padEnd(16, "0");

  // return padded.match(/.{1,4}/g)?.join(" ") || "•••• •••• •••• ••••";
  return padded.match(/.{1,4}/g)?.join(" ") || "0000 0000 0000 0000";
}

export function useCreditCardViewModel(isFlipped: boolean) {
  const flipValue = useSharedValue(0);

  const frontAnimatedStyled = useAnimatedStyle(() => {
    const rotateValue = interpolate(flipValue.value, [0, 1], [0, 180]);

    return {
      transform: [{ rotateY: `${rotateValue}deg` }],
    };
  });

  const backAnimatedStyled = useAnimatedStyle(() => {
    const rotateValue = interpolate(flipValue.value, [0, 1], [180, 360]);

    return {
      transform: [{ rotateY: `${rotateValue}deg` }],
    };
  });

  useEffect(() => {
    flipValue.value = withTiming(isFlipped ? 1 : 0, {
      duration: 600,
    });
  }, [isFlipped]);

  return {
    backAnimatedStyled,
    frontAnimatedStyled,
    formatCreditCardNumber,
  };
}
