function reverseNumber(n) {
    let result = Number(Math.abs(n).toString().split('').reverse().join(''));
    return (n<0) ? -result : result;
}
console.log(reverseNumber(119)) //output:911
console.log(reverseNumber(-119)) //output:-911