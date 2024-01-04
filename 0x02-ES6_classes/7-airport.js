export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // getter and setter for the attribute name
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  // getter and setter for the attribute code
  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = newCode;
  }

  // method that returns a string with the name and code of the airport
  toString() { // returns a string representation of the airport object
    return `[object ${this._code}]`;
  }
}
