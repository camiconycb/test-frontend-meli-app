import { ItemEntity } from "../entities/itemEntity";

export interface IProductRepository{
  getProductDetails(id: String): ItemEntity;
  searchProduct(query: String): any;
}