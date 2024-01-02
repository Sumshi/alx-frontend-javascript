export default function appendToEachArrayValue(array, appendString) {
  // Create a new reference to the same array
  const newArray = array;

  // Iterate through each value in the array using a for...of loop
  for (const value of array) {
    // Get the index of the current value in the original array
    const idx = array.indexOf(value);

    // Modify the corresponding element in the new array by appending the specified string
    newArray[idx] = appendString + value;
  }

  // Return the original array (not the new array)
  return array;
}
