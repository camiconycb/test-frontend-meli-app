import { ItemEntity } from "../../domain/entities/itemEntity";
import { PriceEntity } from "../../domain/entities/priceEntity";

export class ItemModel extends ItemEntity{
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
    free_shipping: Boolean,
    sold_quantity: Number,
    description: string

  ){
    super(
      id,
      title,
      price,
      picture,
      condition,
      free_shipping,
    );
    this.id = id;
    this.title = title;
    this.price = price;
    this.picture = picture;
    this.condition = condition;
    this.free_shipping = free_shipping;
  }

 
}

// export const fromJson = ( parsedJson: any) => {
//   return new ItemModel(
//     parsedJson['id'],
//     parsedJson['title'],
//     parsedJson['price'],
//     parsedJson['picture'],
//     parsedJson['condition'],
//     parsedJson['free_shipping'],
//   )
// }