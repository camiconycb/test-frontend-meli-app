import { atom, selector } from "recoil";
import { ItemEntity } from "../../../search/domain/entities/itemEntity";
import { PriceEntity } from "../../../search/domain/entities/priceEntity";


export const productDetailsState = atom({
  key: 'productDetailsState',
  default: <any>{}
});
export const itemValue = selector({
  key: "itemValue",
  get: ({ get }) => get(productDetailsState),
});

export const productDetailsValue  = selector({
  key: "productDetailsValue",
  get: ({ get }) => {
    const result:any = get(itemValue);
    const item: any = result['item'];
    let itemDetails: ItemEntity;
    if(item !== undefined) {
      const price = new PriceEntity(
        item['price']['currency'],
        item['price']['amount'],
        item['price']['decimals'],
      );
      const free_shipping = item['free_shipping'] === "true"

      itemDetails = new ItemEntity(
        item['id'],
        item['title'],
        price,
        item['picture'],
        item['condition'],
        free_shipping,
        item['sold_quantity'],
        item['description'],
      );
  
      return itemDetails;
    } 
  
  }
});
export const CategoriesItemValue  = selector({
  key: "categoriesItemValue",
  get: ({ get }) => {
    const result = get(itemValue);
    const categories:string[] = result['categories'];
    if(categories !== undefined) {
      return categories.join(' > ');
    }
    else   
      return "";
  }
});