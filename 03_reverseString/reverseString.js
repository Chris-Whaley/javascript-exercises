const reverseString = function(inString = '') {
    let outString = '';

    for (let index = inString.length - 1; index >= 0; --index) {
        outString += inString[index];
        
    }

    return outString;
};

// Do not edit below this line
module.exports = reverseString;
