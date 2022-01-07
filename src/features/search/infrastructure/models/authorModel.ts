import { AuthorEntity } from "../../domain/entities/authorEntity";

export class AuthorModel extends AuthorEntity{
  name: String;
  lastName: String;

  constructor(
    name: String,
    lastName: String
  ){
    super(
      name,
      lastName
    );
    this.name = name;
    this.lastName = lastName;
  }

 
}

export const fromJson = ( parsedJson: any) => {
  return new AuthorModel(
    parsedJson.name,
    parsedJson.lastName
  )
}