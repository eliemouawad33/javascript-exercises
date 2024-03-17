const palindromes = function (palindromes) {
    let regex = /[\W_]/g;
    let lowerCase = palindromes.toLowerCase().replace(regex, '');
    let reverse = lowerCase.split('').reverse().join('');
    return reverse === lowerCase;
};

// Do not edit below this line
module.exports = palindromes;
