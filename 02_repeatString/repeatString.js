const repeatString = function(inString, inNum) {
    let outString = '';

    if (inNum < 0) {
        return 'ERROR';
    } else {
        for (let index = 0; index < inNum; index++) {
            outString += inString;        
        }
    }

    return outString;
};

// Do not edit below this line
module.exports = repeatString;