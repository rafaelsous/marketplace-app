import { Product } from "../interfaces/product";

export const productList: Product[] = [
  {
    id: 1,
    value: "1000.9",
    name: "Sofá",
    description:
      "Sofá revestido com couro legítimo, com estrutura em madeira maciça e pés em metal cromado.",
    photo: "http://localhost:3001/assets/images/Image-6.png",
    height: "23.5cm",
    width: "36.2cm",
    weight: "1.8kg",
    averageRating: 4.7,
    views: 78,
    ratingCount: 3,
    categoryId: 1,
    category: {
      id: 6,
      name: "Móveis",
    },
    createdAt: "2024-02-07 11:30:00.000",
    updatedAt: new Date().toISOString(),
    deletedAt: "",
  },
];
