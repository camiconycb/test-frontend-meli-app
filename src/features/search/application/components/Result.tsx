import { FunctionComponent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import container from '../../../../injection_container';
import { ItemEntity } from '../../domain/entities/itemEntity';
import { IProductRepository } from '../../domain/repositories/productRepository';
import { CategoriesValue, ItemsValue, resultSearchState, ResultSearchValue } from '../state/searchProvider';
import { ParamsSearchProduct, SearchProductUseCase } from '../usecases/searchProductUseCase';
import './styles.scss';
interface IResultProps {

}

const Result: FunctionComponent<IResultProps> = props => {
  const searchParams = new URLSearchParams(useLocation().search);

  const query = searchParams.get("search");
 
  const [result, setResult] = useRecoilState(resultSearchState);
  const [productRepository] = useState(container.get<IProductRepository>('productRepository'));
  const search = async() => {
    try {

      if(query != null) {

        let params: ParamsSearchProduct = new ParamsSearchProduct(query);
        // updateLoading(true)
        let resp:any = await new SearchProductUseCase(productRepository).call(params);
        
        setResult(resp['data']['response']);

      }
      // Even more logic goes here
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    console.log('use effect result');
    search();
  }, [query]);

  const itemsValue: ItemEntity[] = useRecoilValue(ItemsValue);
  const categoriesValue: string = useRecoilValue(CategoriesValue);
  console.log(itemsValue);
  
  if(query == null) return <h3 className='message'>Ingrese parametro de busqueda</h3>
  if (itemsValue.length == 0) return <h3  className='message'>No se encontraron resultados</h3>
  return (
  
  <div>
    <h2 className='container__breadcrumb'>{categoriesValue}</h2>
    <div className='main_container'>
      <ul  className='container__listItems'>
      {itemsValue.map((item) => {
       return (
        <li key={item.id}>
          <div className='listItems_picture'>
            <img src={item.picture} alt={item.id + "thumbnail"} className='picture'></img>
          </div>
          <span className='price'> ${item.price.amount}</span>
          <span className='title'>{item.title} </span>
          <span className='currency'>{item.price.currency}</span>
        </li>
       )
        
      })}
       
      </ul>
     
    </div>
  </div>
  );
  
}
export default Result;

