export default class HolbertonCourse {
  constructor(name, length, students) {
    // verify attributes during object creation
    if (typeof name !== 'string' || typeof length !== 'number' || !Array.isArray(students)) {
      throw new Error('Invalid attribute type');
    }
    // set private attributes
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // getters for name
  get name() {
    return this._name;
  }

  // setter for name
  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw TypeError('Name must be a string');
    }
  }

  // getter for length
  get length() {
    return this._length;
  }

  // setter for length
  set length(newLength) {
    if (typeof newLength === 'number') {
      this._length = newLength;
    } else {
      throw TypeError('Length must be a number');
    }
  }

  // getter for students
  get students() {
    return this._students;
  }

  // setter for students
  set students(newStudents) {
    if (Array.isArray(newStudents)) {
      this._students = newStudents;
    } else {
      throw TypeError('Students must be an array');
    }
  }
}
