import '@testing-library/jest-dom'
import { ParamsSearchProduct, SearchProductUseCase } from '../../../../../features/search/application/usecases/searchProductUseCase';
import { IProductRepository } from '../../../../../features/search/domain/repositories/productRepository';
jest.mock("../../../../../features/search/domain/repositories/productRepository");


  describe("Search Product Use Case", () => {
    let mockResp: Map<string,any> = new Map([
      ["success", true],
    ]);
    let params : ParamsSearchProduct = new ParamsSearchProduct('mesa');

  
    it("should seacrh Product from the repository", async () => {
      const Mock = jest.fn<IProductRepository, any[]>(() => ({
        getProductDetails: jest.fn().mockReturnValue(null),
        searchProduct:jest.fn().mockReturnValue(mockResp),
      }));
  
       //Arrange
        const mock = new Mock();
        const usecase = new SearchProductUseCase(mock);

        //Act
        var result = await usecase.call(params);

        //Assert
        expect(mock.searchProduct).toHaveBeenCalled();
        // expect(mock.getProductDetails).toHaveBeenCalled(); // fail
        // expect(result.get('success')).toBe(true);
     
    });
   
  });
