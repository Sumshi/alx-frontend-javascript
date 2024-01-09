// reduce in javascript

const numbers = [1, -1, 2, 3]
// a = 0, c = 1, sum = 1
// a = 1, c = -1, sum = 0
// a = 0, c = 2, sum = 2
// a = 2, c = 3, sum = 5
const sum = numbers.reduce((accumulator, currentVal) => {
    return accumulator + currentVal;
}, 0);// accumulator is initially set to 0
console.log(sum);