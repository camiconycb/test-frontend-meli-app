import '@testing-library/jest-dom'
import { ParamsGetProduct, GetProductUseCase } from '../../../../../features/search/application/usecases/getProductDetailsUseCase';
import { IProductRepository } from '../../../../../features/search/domain/repositories/productRepository';
jest.mock("../../../../../features/search/domain/repositories/productRepository");


  describe("Get Product Details Use Case", () => {
    let mockResp: Map<string,any> = new Map([
      ["success", true],
    ]);
    let params : ParamsGetProduct = new ParamsGetProduct('MLA912473944');

  
    it("should get Product details from the repository", async () => {
      const Mock = jest.fn<IProductRepository, any[]>(() => ({
        getProductDetails: jest.fn().mockReturnValue(mockResp),
        searchProduct:jest.fn().mockReturnValue(null),
      }));
  
       //Arrange
        const mock = new Mock();
        const usecase = new GetProductUseCase(mock);

        //Act
        var result = await usecase.call(params);

        //Assert
        expect(mock.getProductDetails).toHaveBeenCalled();
        // expect(result.get('success')).toBe(true);
     
    });
   
  });
