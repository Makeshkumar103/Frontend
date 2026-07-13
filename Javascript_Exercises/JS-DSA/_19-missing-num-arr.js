//fing missin nmber in an array

function findMisssingNumber(arr) {
    const maxNum = Math.Max(...arr);
    const numset = New set(arr);
    const missing = [];
    for(let i=1;i<=maxNum;i++){
        if (!numset.has(i)){
            missing.push(i);
        }
    }
    return missing;
}

console.log(findMisssingNumber([1,2,4,6,9]))