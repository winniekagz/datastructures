var factortal = function (n) {
    if (n < 0)
        throw new Error("Input must be a non-negative integer.");
    if (n === 0 || n === 1)
        return 1;
    var fact = 1;
    fact = n * factortal(n - 1);
    console.log(fact);
    return fact;
    // let factorial = 1;
    // for (let i = 2; i <= n; i++) {
    //     factorial *= i;
    // }
    // return factorial;
};
var loopedFactorial = function (n) {
    if (n < 0)
        throw new Error("Input must be a non-negative integer.");
    if (n === 0 || n === 1)
        return 1;
    var factorial = 1;
    for (var i = 2; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
};
var memoizedfactorial = function (_a) {
    var n = _a.n, _b = _a.memo;
    if (memo[n])
        return memo[n];
    if (n < 0)
        throw new Error("Input must be a non-negative integer.");
    if (n === 0 || n === 1)
        return 1;
    memo[n] = n * memoizedfactorial(n - 1, memo);
    console.log(memo);
    return memo[n];
};
memoizedfactorial(400, {});
factortal(6);
loopedFactorial(6);
