import { ItemEntity } from "../../domain/entities/itemEntity";
import { PriceEntity } from "../../domain/entities/priceEntity";

export class ItemModel extends ItemEntity{
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
    super(
      id,
      title,
      price,
      picture,
      condition,
      free_shipping,
      sold_quantity,
      description,
    );
    this.id = id;
    this.title = title;
    this.price = price;
    this.picture = picture;
    this.condition = condition;
    this.free_shipping = free_shipping;
    this.sold_quantity = sold_quantity;
    this.description = description;
  }

 
}

