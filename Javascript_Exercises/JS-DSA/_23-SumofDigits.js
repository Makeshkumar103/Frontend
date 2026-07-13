
function sumOfDigits(n) {
    return n.toString().split('').reduce((a,b) => a + Number(b),0);
}

console.log(sumOfDigits(1234)); //output:10
console.log(sumOfDigits(5678)); //output:26