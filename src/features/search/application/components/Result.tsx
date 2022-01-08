import { FunctionComponent, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { ItemEntity } from '../../domain/entities/itemEntity';
import { CategoriesValue, ItemsValue, ResultSearchValue } from '../state/searchProvider';
interface IResultProps {

}

const Result: FunctionComponent<IResultProps> = props => {
  // useEffect(() => {
  // },[])

  const itemsValue: ItemEntity[] = useRecoilValue(ItemsValue);
  const categoriesValue: string = useRecoilValue(CategoriesValue);

  return (
    <div>
      <h2>{categoriesValue}</h2>
      {itemsValue.map((item) => {
       return (
        <div>
          <img src={item.picture} alt={item.id + "thumbnail"}></img>
          <h1>{item.title} </h1>
          <h2>{item.price.currency}</h2>
          <h2>{item.price.amount}</h2>
        </div>

       )
        
      })}
    </div>
  );
  
}
export default Result;

