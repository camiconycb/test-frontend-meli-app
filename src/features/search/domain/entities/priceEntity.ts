
export class PriceEntity{
  currency: string;
  amount: Number;
  decimals: Number;

  constructor(
    currency: string,
    amount: Number,
    decimals: Number
  ){
    this.currency = currency;
    this.amount = amount;
    this.decimals = decimals;
  }
}