import { ProductI } from "../product";

export interface ProductResponse {
  data: ProductI[];
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
}
