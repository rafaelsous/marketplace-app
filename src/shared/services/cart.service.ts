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
      return productList.map((product) => {
        return product.id === newProduct.id
          ? { ...product, quantity: product.quantity + 1 }
          : product;
      });
    }

    return [...productList, { ...newProduct, quantity: 1 }];
  },
  calculateTotal: (productsList: CartProduct[]) => {
    return productsList.reduce((acc, product) => {
      return acc + Number(product.price) * product.quantity;
    }, 0);
  },
  removeProductFromCart: () => {},
  updateProductQuantity: () => {},
};
