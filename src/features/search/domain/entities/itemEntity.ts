import { PriceEntity } from "./priceEntity";

export class ItemEntity{
  id: string;
  price: PriceEntity;
  picture: string;
  condition: string;
  free_shipping: Boolean;
  sold_quantity: Number;
  description: string;

  constructor(
    id: string,
    price: PriceEntity,
    picture: string,
    condition: string,
    free_shipping: Boolean,
    sold_quantity: Number,
    description: string
  ){
    this.id = id;
    this.price = price;
    this.picture = picture;
    this.condition = condition;
    this.free_shipping = free_shipping;
    this.sold_quantity = sold_quantity;
    this.description = description;

  }

}