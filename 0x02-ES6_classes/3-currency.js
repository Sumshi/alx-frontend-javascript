export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // getter for code
  get code() {
    return this._code;
  }

  // setter for code
  set code(newCode) {
    this._code = newCode;
  }

  // getter for name
  get name() {
    return this._name;
  }

  // setter for name
  set name(newName) {
    this._name = newName;
  }

  // method to print currency
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
