import { UseCase } from "../../../../core/usecase/usecase";
import { IProductRepository } from "../../domain/repositories/productRepository";



export class SearchProductUseCase implements  UseCase<any, ParamsSearchProduct> {

  repository: IProductRepository;
  constructor(repository: IProductRepository ){
    this.repository = repository;
  }
  
   async call(params: ParamsSearchProduct) {
    return this.repository.searchProduct(params.query);
  }

}

export class ParamsSearchProduct{
  query: string;
  constructor(query : string){
    this.query = query;
  }
}
