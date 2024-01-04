import Building from './5-building';

// class skyHighBuilding inherits from class Building
export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);// call the constructor of the parent class
    this._floors = floors;
  }

  // getter and setter for the attribute floors
  get floors() {
    return this._floors;
  }

  set floors(newFloors) {
    this._floors = newFloors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
