// reduce in javascript

const numbers = [1, -1, 2, 3]
const sum = numbers.reduce((accumulator, currentVal) => {
    return accumulator + currentVal;
}, 0);
console.log(sum);