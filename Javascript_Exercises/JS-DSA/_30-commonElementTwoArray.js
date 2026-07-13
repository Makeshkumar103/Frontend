//find the common elements in two arrays

function commonElements(arr1,arr2) {
    return arr1.filter((val)=>arr2.includes(val));
}

console.log(commonElements([1,2,2,3,4],[3,4,5,6]))
