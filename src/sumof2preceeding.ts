// given a number n,find first n elements of fibonacci sequence

function fibonaccisequence(array: number[], sequenceLength: number) {
    let result = [];
    let temp = 0;
    while (result.length < sequenceLength) {
        for (let i = 0; i < array.length; i++) {
            if (result.length==0){
                 temp = array[i] + array[i+1];
            result.push(temp);
                }
            temp = result[i] + array[i+1];
            result.push(temp);
        }
    }
    return result.slice(0,sequenceLength); // Move the return statement here
}

const p = fibonaccisequence([1, 54, 67, 76], 4);
console.log('test', p);

