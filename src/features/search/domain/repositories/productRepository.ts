import { ItemEntity } from "../entities/itemEntity";

export interface IProductRepository{
  getProductDetails(id: String): {};
  searchProduct(query: String): {};
}