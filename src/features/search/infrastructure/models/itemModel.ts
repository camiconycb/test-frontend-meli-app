import { ItemEntity } from "../../domain/entities/itemEntity";
import { PriceEntity } from "../../domain/entities/priceEntity";

export class ItemModel extends ItemEntity{
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
    super(
      id,
      price,
      picture,
      condition,
      free_shipping,
      sold_quantity,
      description
    );
    this.id = id;
    this.price = price;
    this.picture = picture;
    this.condition = condition;
    this.free_shipping = free_shipping;
    this.sold_quantity = sold_quantity;
    this.description = description;
  }

 
}

export const fromJson = ( parsedJson: any) => {
  return new ItemModel(
    parsedJson['id'],
    parsedJson['price'],
    parsedJson['picture'],
    parsedJson['condition'],
    parsedJson['free_shipping'],
    parsedJson['sold_quantity'],
    parsedJson['description'],
  )
}