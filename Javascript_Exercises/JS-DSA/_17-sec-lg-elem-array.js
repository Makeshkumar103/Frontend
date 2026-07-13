
function secondLargestNum(arr) {
    let first = -Infinity;
    let second = -Infinity;     
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        }
        else if (arr[i] > second && arr[i] != first) {
            second = arr[i];
        }
    }   
    return second;
}

console.log(secondLargestNum([12, 35, 1, 10, 34, 1])); //Output:34
console.log('-------------------');


function secondlargest (arr) {
    let sorted = [...new set(arr)]
    let result = sorted.sort((a,b)=> b-a);
    return result[1];
}
console.log(secondlargest([12, 35, 1, 10, 34, 1])); //Output:34
