import { PriceEntity } from "./priceEntity";

export class ItemEntity{
  id: string;
  title: string;
  price: PriceEntity;
  picture: string;
  condition: string;
  free_shipping: Boolean;

  constructor(
    id: string,
    title: string,
    price: PriceEntity,
    picture: string,
    condition: string,
    free_shipping: Boolean
  ){
    this.id = id;
    this.price = price;
    this.title = title;
    this.picture = picture;
    this.condition = condition;
    this.free_shipping = free_shipping;

  }

}