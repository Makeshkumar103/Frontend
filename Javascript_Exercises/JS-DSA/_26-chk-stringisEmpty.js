
function stringCheck(str) {
    return (str.length === 0) ? "String is empty" : "String is not empty";
    // return (str === "") ? "String is empty" : "String is not empty";
}

console.log(stringCheck("")); //Output: String is empty
console.log(stringCheck("Hello")); //Output: String is not empty