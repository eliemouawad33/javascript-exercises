const sumAll = function(a, b) {
    let sum = b;
    if (a < 0 || b < 0 || typeof a !== 'number' || typeof b !== 'number') {
        return 'ERROR';
    }
    if (a > b) {
        b = a;
        a = sum;
        sum = b;
    }
    for (let i = a; i < b; i++) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
