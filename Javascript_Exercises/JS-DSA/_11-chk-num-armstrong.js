//Check if a Number is an Armstrong Number
function isArmstrongNumber(num) {
    let num = num.toString();
    for(let i=0; i<num.length;i++){
    sum += Math.pow(Number (num[i]),num.length);
    }
    return (sum == n) ? "Yes it is" : "it is not";
}
console.log(isArmstrongNumber(153)); //Output:Yes it is
console.log(isArmstrongNumber(9474));//Output:Yes it is
