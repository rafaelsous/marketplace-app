import { Text, View } from "react-native";

import { ProductI } from "@/shared/interfaces/product";

interface ProductCardParams {
  product: ProductI;
}

export function ProductCard({ product }: Readonly<ProductCardParams>) {
  return (
    <View>
      <Text>{product.name}</Text>
    </View>
  );
}
