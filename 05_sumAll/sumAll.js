const sumAll = function(num1, num2) {

    // error handling. reject:
    // non-numbers (e.g., arrays, strings)
    if (typeof(num1) != 'number' || typeof(num2) != 'number') {
        return 'ERROR'
    };
    // non-integers (i.e. floats)
    if (Math.round(num1)%num1 != 0 || Math.round(num2)%num2 != 0) {
        return 'ERROR'
    };
    // negative integers
    if (num1 < 0 || num2 < 0) {
        return 'ERROR'
    };

    const lowestNumber = Math.min(num1, num2);
    const highestNumber = Math.max(num1, num2);
    let outputSum = 0;

    for (let index = lowestNumber; index <= highestNumber; index++) {
        outputSum += index;
    }

    return outputSum;
    // input 2 numbers
    // start with lowest number
    // end with highest number
    // loop through every number in between
    // add that number to a running total
    // return that running total
    
};

// Do not edit below this line
module.exports = sumAll;

sumAll(1, 4)
