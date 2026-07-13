function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;      

}
console.log(isPalindrome("mkm")); // true
console.log(isPalindrome("makesh")); // false
console.log("***************Another way*********************");

function checkPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let left = 0;
    let right = cleanedStr.length - 1;     
    while (left < right) {
        if (cleanedStr[left] !== cleanedStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(checkPalindrome("racecar")); // true
console.log(checkPalindrome("kumar")); // false
console.log("***************Another way*********************");

function isPalin(str) {
    function reverseString(s){
         let reversed = '';
    for (let i = str.length -1; i >= 0; i--){
        reversed += str[i];
    }
    return reversed;
    }
    const cleanedStr = str.toLowerCase();
    return cleanedStr === reverseString(cleanedStr);
}
console.log(isPalin("madam")); // true
console.log(isPalin("hello")); // false
console.log("***************Another way*********************");