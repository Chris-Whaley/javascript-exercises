const fibonacci = function(num) {
    if (num == 0) {
        return 0
    } else if (num < 0 ) {
        return 'OOPS';
    };

    numInput = Number(num);

    arr = [1, 1, ];
    // example: 1, 1, 2, 3, 5, 8
    // need 2 numbers. first = n - 2
    // second = n - 1
    // calc: (n - 2) + (n - 1)
    for (let index = 2; index <= num; index++) {
        let element = arr[index - 2] + arr[index - 1];
        arr[index] = element;
    }

    return arr[numInput - 1];
};

// Do not edit below this line
module.exports = fibonacci;
