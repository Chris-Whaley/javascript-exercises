const leapYears = function(inputYear) {
// yes:
    // divisible by 4 and 400
    if (inputYear%400 == 0) {
        return true;
    } else if (inputYear%4 == 0 && inputYear%100 != 0) {
        return true;
    } else {
        return false;
    };

    // no:
        // divisible by 100
        // not divisible by 4

};

// Do not edit below this line
module.exports = leapYears;
