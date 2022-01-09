import { FunctionComponent, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { ItemEntity } from '../../domain/entities/itemEntity';
import { CategoriesValue, ItemsValue, ResultSearchValue } from '../state/searchProvider';
import './styles.scss';
interface IResultProps {

}

const Result: FunctionComponent<IResultProps> = props => {
  // useEffect(() => {
  // },[])

  const itemsValue: ItemEntity[] = useRecoilValue(ItemsValue);
  const categoriesValue: string = useRecoilValue(CategoriesValue);
  console.log(itemsValue);
  
  if (itemsValue.length == 0) return <div></div>
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

