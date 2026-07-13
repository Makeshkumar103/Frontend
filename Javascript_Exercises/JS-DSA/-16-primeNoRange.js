//Print prime number in a range

function primeCheckInRange(n,m) {
    let element = [];
    for(let i=n;i<=m;i++) {
        if(i<2) continue;
        let isPrime = true;
        for(let j=2;j<Math.sqrt(i);j++) {
            if(i/j == 0) {
                (isPrime) = false;
            break;    
            }
        }
        if(isPrime){
            element.push(i);
        }
    }
    return element;
}

console.log(primeCheckInRange(10,30))