const removeFromArray = function(inArray, ...removeAdditionalItems) {

    let outArray = inArray;

    // outer loop through items to remove
    for (const removalItem of removeAdditionalItems){
        for (let index = 0; index < inArray.length; index++) {
            if(outArray[index] == removalItem) {
                delete outArray[index];
            }
            
        }
    }

    // filter out the undefined caused by the delete method in loop above
    outArray = outArray.filter(function(element) {
        return element != undefined;
    });

    return outArray;
};

// Do not edit below this line
module.exports = removeFromArray;

removeFromArray([1, 2, 3, 4], 3, 2)