export interface CreateOrder {
  creditCardId: number;
  items: {
    productId: number;
    quantity: number;
  }[];
}

export interface OrderResponse {
  message: string;
  ordersCount: number;
  orders: {
    id: number;
    productId: number;
    quantity: number;
    totalPrice: number;
  }[];
}
