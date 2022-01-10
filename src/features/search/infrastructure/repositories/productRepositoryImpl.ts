import { ItemEntity } from "../../domain/entities/itemEntity";
import { IProductRepository } from "../../domain/repositories/productRepository";
import { injectable } from "inversify";
import "reflect-metadata";
import axios from "axios";

@injectable()
export class ProductRepositoryImpl implements IProductRepository{

  getProductDetails(id: string): {} {
    const baseURL = `http://localhost:4000/api/items/${id}`;
    const response = axios.get(baseURL);
    
    return response;
  }

  searchProduct(query: string): {}{
    const baseURL = `http://localhost:4000/api/items/?search=:${query}`;
    const response = axios.get(baseURL);
    
    return response;
  }

}