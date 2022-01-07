import { AuthorEntity } from "./authorEntity";
import { ItemEntity } from "./itemEntity";

export class ProductEntity{
  author: AuthorEntity;
  item: ItemEntity;
 
  constructor(
    author: AuthorEntity,
    item: ItemEntity
  ){
    this.author = author;
    this.item = item;
  }
}

