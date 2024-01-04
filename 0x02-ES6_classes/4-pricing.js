import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // getter for amount
  get amount() {
    return this._amount;
  }

  // setter  for amount
  set amount(newAmount) {
    this._amount = newAmount;
  }

  // getter for currency
  get currency() {
    return this._currency;
  }

  // setter for currency
  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  // method to print price
  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  // static method to convert price
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
