export default function appendToEachArrayValue(array, appendString) {
    for (let idx in array) {
        array[idx] = appendString + array[idx];
    }

    return array;
}
