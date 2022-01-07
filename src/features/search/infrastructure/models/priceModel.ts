import {PriceEntity } from "../../domain/entities/priceEntity";

export class PriceModel extends PriceEntity{
  currency: string;
  amount: Number;
  decimals: Number;

  constructor(
    currency: string,
    amount: Number,
    decimals: Number

  ){
    super(
      currency,
      amount,
      decimals
    );
    this.currency = currency;
    this.amount = amount;
    this.decimals = decimals;
  }

 
}

export const fromJson = ( parsedJson: any) => {
  return new PriceModel(
    parsedJson['currency'],
    parsedJson['amount'],
    parsedJson['decimals'],
  );
}