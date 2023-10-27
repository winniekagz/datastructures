function fib(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let fibarr = [0, 1];
    
    for (let i = 2; i <= n; i++) {
        fibarr[i] = fibarr[i - 1] + fibarr[i - 2];
    }
    
    return fibarr[n];
}
