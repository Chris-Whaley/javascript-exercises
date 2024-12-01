const leapYears = function(inputYear) {
// yes:
    // divisible by 4 and 400
    if (inputYear%400 == 0) {
        return true;
    // divisible by 4 but NOT 100
    } else if (inputYear%4 == 0 && inputYear%100 != 0) {
        return true;
    } else {
        return false;
    };
};

// Do not edit below this line
module.exports = leapYears;
