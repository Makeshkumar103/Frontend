// reverse a string
function reverseString(string) {
    return string.split("").reverse().join("").toLowerCase();
}

console.log(reverseString("Hello")); // Output: "olleh"

let str = "JavaScript";
console.log(str.split(''));
console.log(str.split('').reverse());
console.log(str.split('').reverse().join(''));
console.log(str.split('').reverse().join('').toLowerCase());