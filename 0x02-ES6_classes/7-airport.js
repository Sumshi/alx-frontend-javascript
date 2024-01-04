export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // method that returns a string with the name and code of the airport
  toString() {
    return `[object ${this._code}]`;
  }
}
