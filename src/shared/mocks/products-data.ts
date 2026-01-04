import { ProductI } from "../interfaces/product";

export const productList: ProductI[] = [
  {
    id: 1,
    value: "",
    name: "Sofá",
    description: "Reclinável e retrátil",
    photo: "",
    height: "",
    width: "",
    weight: "",
    averageRating: 4,
    views: 1252,
    ratingCount: 3,
    categoryId: 1,
    category: {
      id: 1,
      name: "móveis",
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: "",
  },
];
