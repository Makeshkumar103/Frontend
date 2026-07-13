function fibonacci (n) {
    let series = [0, 1];
    for (let i=2; i<n; i++) {
        series.push(series[i-1] + series[i-2]);
    }
    return series.slice(0,n);
}
console.log(fibonacci(5)); // Output: [0, 1, 1, 2, 3]
console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// Explanation: This function generates a Fibonacci series of 'n' terms by initializing an array with the first two Fibonacci numbers and iteratively calculating the subsequent numbers by summing the two preceding numbers.