import { PriceEntity } from "./priceEntity";

export class ItemEntity{
  id: string;
  title: string;
  price: PriceEntity;
  picture: string;
  condition: string;
  free_shipping: Boolean;
  sold_quantity: number;
  description: string;

  constructor(
    id: string,
    title: string,
    price: PriceEntity,
    picture: string,
    condition: string,
    free_shipping: Boolean,
    sold_quantity: number,
    description: string
  ){
    this.id = id;
    this.price = price;
    this.title = title;
    this.picture = picture;
    this.condition = condition;
    this.free_shipping = free_shipping;
    this.sold_quantity = sold_quantity;
    this.description = description;

  }

}