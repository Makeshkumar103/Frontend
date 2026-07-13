function fNonRepChar(str) {
    const frequencyMap = {};
    //Build frequency Map
    for (const char of str) {
        if (frequencyMap[char]) {
            frequencyMap[char]++;
        } else {
            frequencyMap[char] = 1;
        }   
    }
    //Find first non-repeating character
    for (const char of str) {
        if (frequencyMap[char] === 1) {
            return char;
        }   
    }
    return null;    
}
console.log(fNonRepChar("swiss")); // Output: "w"
console.log(fNonRepChar("repeater"));   