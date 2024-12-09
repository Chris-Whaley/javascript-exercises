const fibonacci = function(num) {

    arr = [1, 1, ];
    // example: 1, 1, 2, 3, 5, 8
    // need 2 numbers. first = n - 2
    // second = n - 1
    // calc: (n - 2) + (n - 1)
    for (let index = 2; index <= num; index++) {
        let element = arr[index - 2] + arr[index - 1];
        arr[index] = element;
    }

    return arr[num - 1];
};
// console.log( fibonacci(5) );
// Do not edit below this line
module.exports = fibonacci;
