function CountCharacterOccurences(str) {
    const Counts= {};
    for  (let char of str) {
        if (Counts[char]) {
            Counts[char] += 1;
        }        else {
            Counts[char] = 1;
        }   
    }
    return Counts;
}

const inputString = "hello world";
const result = CountCharacterOccurences(inputString);

console.log(result); // { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
console.log("***************Another way*********************"); 

function charCount(str) {
    const charMap = {}; 
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charMap[char]) {
            charMap[char]++;
        }
        else {
            charMap[char] = 1;
        }

    }
    return charMap;
}               
const input = "character";
const output = charCount(input);
console.log(output); // { c: 2, h: 1, a: 2, r: 2, t: 1, e: 1 }
console.log("***************Another way*********************");

