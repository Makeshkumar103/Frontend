
function remove(arr) {
    return arr.filter((value,index) => arr.indexOf((value) === index));
}

console.log(remove([1,2,2,3,4,4,5])); 