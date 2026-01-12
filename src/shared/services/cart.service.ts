import { CartProduct, OmitedCartProduct } from "../store/cart-store";

export const cartService = {
  findExistingProduct: (productList: CartProduct[], productId: number) =>
    productList.some(({ id }) => id === productId),
  addProdutToCart: (
    productList: CartProduct[],
    newProduct: OmitedCartProduct
  ) => {
    const existingProduct = cartService.findExistingProduct(
      productList,
      newProduct.id
    );

    if (existingProduct) {
      const updatedProductList = productList.map((product) =>
        product.id === newProduct.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      const updatedTotal = cartService.calculateTotal(updatedProductList);

      return { products: updatedProductList, total: updatedTotal };
    }

    const updatedProductList = [...productList, { ...newProduct, quantity: 1 }];
    const updatedTotal = cartService.calculateTotal(updatedProductList);

    return { products: updatedProductList, total: updatedTotal };
  },
  calculateTotal: (productsList: CartProduct[]) =>
    productsList.reduce(
      (acc, product) => acc + Number(product.price) * product.quantity,
      0
    ),
  removeProductFromCart: (productsList: CartProduct[], productId: number) => {
    const updatedProductList = productsList.filter(
      ({ id }) => id !== productId
    );
    const updatedTotal = cartService.calculateTotal(updatedProductList);

    return { products: updatedProductList, total: updatedTotal };
  },
  updateProductQuantity: () => {},
};
