const removeFromArray = function(inArray, removeItems) {

    let outArray = [];

    // loop through the input array
    for (const item of inArray) {
        if (item != removeItems) {
            outArray.push(item);
        }
    }

    return outArray;
};

// Do not edit below this line
module.exports = removeFromArray;