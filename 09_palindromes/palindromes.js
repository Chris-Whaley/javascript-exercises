const palindromes = function (input) {
    
    let inputText = input.toLowerCase();

    inputText = inputText.replace(/[^a-z0-9]/gi, "");
    
    let inputArr = Array.from(inputText.split(''));
    let reverseArr = Array.from(inputText.split(''));

    reverseArr.reverse();
    let reverseText = '';

    
    // join back into string
    reverseArr.forEach(element => {
        reverseText += element;
    });;
    
    if (inputText.toLowerCase() == reverseText.toLowerCase()) {
        return true;
    } else {
        return false;
    }

    
};


// Do not edit below this line
module.exports = palindromes;
