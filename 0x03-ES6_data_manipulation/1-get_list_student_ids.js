export default function getStudentIds(array) {
  // check if array is an array
  if (Array.isArray(array)) {
    return array.map((item) => item.id);
  } // else return empty array
  return [];
}
