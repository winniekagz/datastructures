const factortal = (n: number): number|undefined => {
    if (n < 0) throw new Error("Input must be a non-negative integer.");
    if (n === 0 || n === 1) return 1;
    let fact = 1;
    fact=n*(factortal(n-1) as number)
    console.log(fact)
    return fact;

    // let factorial = 1;
    // for (let i = 2; i <= n; i++) {
    //     factorial *= i;
    // }
    // return factorial;
}

const loopedFactorial = (n: number): number => {
    if (n < 0) throw new Error("Input must be a non-negative integer.");
    if (n === 0 || n === 1) return 1;
    let factorial = 1;
    for(let i = 2; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
};


const memoizedfactorial=({n,memo:{}}:{n:number,memo})=>{
    if (memo[n]) return memo[n];
    if (n < 0) throw new Error("Input must be a non-negative integer.");
    if (n === 0 || n === 1) return 1;
    memo[n] = n * memoizedfactorial(n - 1, memo);
    console.log(memo)
    return memo[n];

}
memoizedfactorial(400,{})
factortal(6)
loopedFactorial(6)