export default class HolbertonCourse {
  constructor(name, length, students) {
    // verify attributes during object creation
    if (typeof name !== 'string') throw TypeError('Name must be a string');
    if (typeof length !== 'number') throw TypeError('Length must be a number');
    if (!Array.isArray(students)) throw TypeError('Students must be an array');

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
    this._name = newName;
  }

  // getter for length
  get length() {
    return this._length;
  }

  // setter for length
  set length(newLength) {
    this._length = newLength;
  }

  // getter for students
  get students() {
    return this._students;
  }

  // setter for students
  set students(newStudents) {
    this._students = newStudents;
  }
}
