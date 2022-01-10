import { FunctionComponent, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import container from '../../../../injection_container';
import { GetProductUseCase, ParamsGetProduct } from '../../../search/application/usecases/getProductDetailsUseCase';
import { ItemEntity } from '../../../search/domain/entities/itemEntity';
import { IProductRepository } from '../../../search/domain/repositories/productRepository';
import { CategoriesItemValue, productDetailsState, productDetailsValue } from '../state/productDetailsProvider';
import './styles.scss';

interface IDetailsProps {
  // item: ItemEntity;
}

const Details: FunctionComponent<IDetailsProps> = props => {
  const [item, setItem] = useRecoilState(productDetailsState);
  const itemValue  = useRecoilValue(productDetailsValue);
  const categoriesItemValue  = useRecoilValue(CategoriesItemValue);
  const [loading, setLoading] = useState(true);
  itemValue as ItemEntity;
  let { id } = useParams();
  const [productRepository] = useState(container.get<IProductRepository>('productRepository'));

  const getProduct = async() => {
    try {

      if(id != null) {

        let params: ParamsGetProduct = new ParamsGetProduct(id);
        // updateLoading(true)
        let resp:any = await new GetProductUseCase(productRepository).call(params);
        
        setItem(resp['data']['response']);
        setLoading(false);
      }
      // Even more logic goes here
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    console.log('use effect details');
    getProduct();
  }, [id]);

 
  if(loading) {
    return  <>
      <Helmet>
        <title>Cargando...</title>
      </Helmet>
      <span className='message'>Cargando...</span>
    </>
  }
  return <>
    <Helmet>
      <title>{itemValue?.title}</title>
      <meta name='description' content={`details of ${itemValue?.title}` }></meta>
    </Helmet>
    <div>
      <h2 className='container__breadcrumb'>{categoriesItemValue}</h2>
      <div className='main_container'>
        <div className='wrapper_detail'>
          <div className='detail__wrapper_image'>
            <img className='detail__img' src={itemValue?.picture} alt=""  />
          </div>
         
          <span className='detail__sold_quantity' >{itemValue?.condition + ' - '+ itemValue?.sold_quantity +  ' vendidos'}</span>
          <span className='detail__title'>{itemValue?.title}</span>
          <div className='wrapper__amount'>
            <span className='detail__amount'>${itemValue?.price.amount}</span>
            <span className='detail__decimals'>{itemValue?.price.decimals}</span>

          </div>
          <button  className='detail__button'>Comprar</button>
          <span className='detail__title2'>Descripción del producto</span>
          <span className='detail__description'>{itemValue?.description}</span>

        </div>
    </div>
    </div>
  </>
  
  
}
export default Details;

