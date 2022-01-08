import { atom, selector } from "recoil";
import { ItemEntity } from "../../domain/entities/itemEntity";
import { PriceEntity } from "../../domain/entities/priceEntity";


export const queryState = atom({
  key: 'queryState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

export const QueryValue = selector({
  key: "queryValue",
  get: ({ get }) => get(queryState),
});


export const resultSearchState = atom({
  key: 'resultSearchState',
  default: <any>{}
});

export const ResultSearchValue = selector({
  key: "resultSearchValue",
  get: ({ get }) => get(resultSearchState),
});

export const ItemsValue  = selector({
  key: "itemsValue",
  get: ({ get }) => {
    const result = get(ResultSearchValue);
    const items: [] = result['items'];
    if(items !== undefined) {

      const resultItems: ItemEntity[] = items.map((item) => {
        const price = new PriceEntity(
          item['price']['currency'],
          item['price']['amount'],
          item['price']['decimals'],
        );
        const free_shipping = item['free_shipping'] === "true"
        return new ItemEntity(
          item['id'],
          item['title'],
          price,
          item['picture'],
          item['condition'],
          free_shipping
        );
      });
      return resultItems;
    }
    else   
      return [];
  }
});
export const CategoriesValue  = selector({
  key: "categoriesValue",
  get: ({ get }) => {
    const result = get(ResultSearchValue);
    const categories:string[] = result['categories'];
    if(categories !== undefined) {
      return categories.join(' > ');
    }
    else   
      return "";
  }
});