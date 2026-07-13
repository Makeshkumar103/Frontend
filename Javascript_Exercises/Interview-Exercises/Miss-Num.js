function findMissingNumber(arr) {
    const n = arr.length + 1; // Since one number is missing
    const totalSum = (n * (n + 1)) / 2; // Sum of numbers from 1 to n.
    const arraySum = arr.reduce((acc, num) => acc + num, 0); //sum of elements in the array
    return totalSum - arraySum;
}       
console.log(findMissingNumber([1, 2, 4, 5])); // Output: 3


function findMissingNumberr(arr, n) {
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
}       
console.log(findMissingNumberr([1, 2, 3, 5, 6], 6)); // Output: 4