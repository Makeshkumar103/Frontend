function factorial(n) {
    let fact = 1;
    if (n < 0) return 'Undefined for negative numbers';
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;    
}
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
console.log(factorial(-3)); // Output: Undefined for negative numbers

// Explanation: This function calculates the factorial of a given non-negative integer 'n' by multiplying all integers from 1 to 'n'. If 'n' is negative, it returns a message indicating that the factorial is undefined for negative numbers.