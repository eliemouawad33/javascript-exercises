const fibonacci = function(fib) {
    if (fib < 0) {
        return 'OOPS';
    }
    if (fib === 0) {
        return 0;
    }
    if (fib === 1) {
        return 1;
    }
    return fibonacci(fib - 1) + fibonacci(fib - 2);
};

// Do not edit below this line
module.exports = fibonacci;
