export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    this.evacuationWarningMessage();
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Setter for sqft
  set sqft(value) {
    this._sqft = value;
  }

  // Abstract method - should be implemented by subclasses
  evacuationWarningMessage() {
    if (this.constructor !== Building) throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
