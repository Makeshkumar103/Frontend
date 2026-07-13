const String ='hello';
const stringReversed = String.split('').reverse().join('');
console.log(stringReversed); // Output: 'olleh'
console.log("***************Another way*********************");

const ogStr = 'world';
const revStr = [...ogStr].reduce((acc, char) => char + acc, '');
console.log(revStr); // Output: 'dlrow'
console.log("***************Another way*********************");

const str = 'JavaScript';
const rev = (s) => {
  let result = '';  
    for (let char of s) {
        result = char + result;
    }
    return result;
}
console.log(rev(str)); // Output: 'tpircSavaJ'
console.log("***************Another way*********************");

const originalString = 'example';
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: 'elpmaxe'

function reverseString(str) {
    let reversed = '';
    for (let i = str.length -1; i >= 0; i--){
        reversed += str[i];
    }
    return reversed;
}
