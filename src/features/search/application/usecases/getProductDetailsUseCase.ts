import { UseCase } from "../../../../core/usecase/usecase";
import { IProductRepository } from "../../domain/repositories/productRepository";



export class GetProductUseCase implements  UseCase<any, ParamsGetProduct> {

  repository: IProductRepository;
  constructor(repository: IProductRepository ){
    this.repository = repository;
  }
  
   async call(params: ParamsGetProduct) {
    return this.repository.getProductDetails(params.id);
  }

}

export class ParamsGetProduct{
  id: string;
  constructor(id : string){
    this.id = id;
  }
}
