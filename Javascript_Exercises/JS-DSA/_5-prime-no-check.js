function primeCheck(num) {
    if (num<2) return "Not a prime number";
    for(let i=2;i<=Math.sqrt(num);i++) {
        if(num%i===0) return "Not a prime number";
    }
    return "It is a prime number";
}

console.log(primeCheck(11)); // Output: It is a prime number
console.log(primeCheck(15)); // Output: Not a prime number
console.log(primeCheck(2));// Output: It is a prime number
console.log(primeCheck(1)); // Output: Not a prime number

// Explanation: This function checks if a given number 'num' is a prime number by testing divisibility from 2 up to the square root of 'num'. If it finds any divisor, it returns that the number is not prime; otherwise, it confirms that it is a prime number.