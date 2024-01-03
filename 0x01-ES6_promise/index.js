let read = true;

let readBook = new Promise(function (resolve, reject) {
    if (read === true) {
        resolve("yes i have read the book")
    } else {
        reject("i have not read the book")
    }
});
console.log(readBook)
// output is fulfilled, yes i have read the book
// setting a timeout keeps the promise in a pending state