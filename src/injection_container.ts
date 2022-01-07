import { Container } from "inversify";
import { IProductRepository } from "./features/search/domain/repositories/productRepository";
import { ProductRepositoryImpl } from "./features/search/infrastructure/repositories/productRepositoryImpl";

export const container = new Container();


container.bind<IProductRepository>("productRepository").to(ProductRepositoryImpl);

export default container;
