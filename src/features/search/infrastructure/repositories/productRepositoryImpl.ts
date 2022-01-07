import { ItemEntity } from "../../domain/entities/itemEntity";
import { IProductRepository } from "../../domain/repositories/productRepository";
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export class ProductRepositoryImpl implements IProductRepository{

  getProductDetails(id: string): ItemEntity {
    throw new Error("Method not implemented.");
  }

  searchProduct(query: string): [ItemEntity] {
    throw new Error("Method not implemented.");
  }

}