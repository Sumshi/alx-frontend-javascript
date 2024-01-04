export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // getter and setter for the attribute size
  get size() {
    return this._size;
  }

  set size(newSize) {
    this._size = newSize;
  }

  // getter and setter for the attribute location
  get location() {
    return this._location;
  }

  set location(newLocation) {
    this._location = newLocation;
  }

  // When cast into a Number, return the size
  valueOf() {
    return this._size;
  }

  // When cast into a String, return the location
  toString() {
    return this._location;
  }
}
