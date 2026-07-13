//Find the first non repeated character in a string

function nonRepeatedChar(str) {
    for(let char of str) {
        let regex = new RegExp(char,'ig');
        if (str.match(regex).length == 1){
            return char;
        }
    }
    return null;
}

console.log(nonRepeatedChar("Malayalam"))