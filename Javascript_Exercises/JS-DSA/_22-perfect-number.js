//Check for perfect number

function perfectNumber(n, sum=0) {
    for(let i=1;i<n;i++){
        if(n%1==0) {
            sum+=i
        }
    }
    return (sum==n)? "perfect number":"not a perfect number";
}

console.log(perfectNumber(28));
console.log(perfectNumber(10));