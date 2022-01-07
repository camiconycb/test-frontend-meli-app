export class AuthorEntity{
  name: String;
  lastName: String;

  constructor(
    name: String,
    lastName: String
  ){
    this.name = name;
    this.lastName = lastName;
  }
}