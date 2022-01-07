import { FunctionComponent, useContext, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import container from '../../../../../injection_container';
import { IProductRepository } from '../../../domain/repositories/productRepository';
import { QueryValue, resultSearchState } from '../../state/searchProvider';
// import { SearchProvider } from '../../context/searchProvider';
import { ParamsSearchProduct, SearchProductUseCase } from '../../usecases/searchProductUseCase';

import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import Logo from '../atoms/Logo';
import '../styles.scss';



interface ISearchBoxProps {

}

const SearchForm: FunctionComponent<ISearchBoxProps> = props => {
  // useEffect(() => {
  // },[])

  const [productRepository] = useState(container.get<IProductRepository>('productRepository'));
  const queryValue = useRecoilValue(QueryValue);
  
  const [result, setResult] = useRecoilState(resultSearchState);

  async function search() {
    let params: ParamsSearchProduct = new ParamsSearchProduct(queryValue);
    // updateLoading(true)
    let resp = await new SearchProductUseCase(productRepository).call(params);
    setResult(resp);
    console.log(resp);
    // setTimeout(() => {
    //   if(isMounted) {
    //     updateLoading(false)
    //   }
    // }, 800)
    
    // if(!resp.get('success')) {
    //   props.showError(resp.get('errorMessage'))
    // }
  }

  return (
    <nav>
      <form 
        className='header__searchForm' 
        onSubmit={(e) => {
          e.preventDefault();
          search();
        }}>

        <Input></Input>
        <Button></Button>
      </form>
    </nav>
    );
  

  
 
};


export default SearchForm;