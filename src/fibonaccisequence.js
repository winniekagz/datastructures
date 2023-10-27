function fibonnaci(sequencelength) {
    var fib = [0, 1];
    for (var i = 2; i < sequencelength; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}
console.log(fibonnaci(8));
