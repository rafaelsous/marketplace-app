import { Text, View } from "react-native";

interface AddToCartSuccessModalProps {
  productName: string;
  onClose: () => void;
  onGoToCart: () => void;
  onContinueShopping: () => void;
}

export function AddToCartSuccessModal({
  onClose,
  onGoToCart,
  onContinueShopping,
  productName,
}: Readonly<AddToCartSuccessModalProps>) {
  return (
    <View className="w-full max-w-sm p-6 bg-white rounded-xl">
      <Text>{productName} foi adicionado ao carrinho!</Text>
    </View>
  );
}
