import { ItemEntity } from "../../domain/entities/itemEntity";
import { IProductRepository } from "../../domain/repositories/productRepository";
import { injectable } from "inversify";
import "reflect-metadata";
import axios from "axios";

@injectable()
export class ProductRepositoryImpl implements IProductRepository{

  getProductDetails(id: string): ItemEntity {
    throw new Error("Method not implemented.");
  }

  searchProduct(query: string): {}{
    const baseURL = `http://localhost:4000/api/items/?search=:${query}`;
    const response = axios.get(baseURL);
    
    return response;
  }

}