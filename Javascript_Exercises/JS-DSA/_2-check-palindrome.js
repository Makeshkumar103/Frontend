function isPalindrome(num) {
    let num1 = num.split('').reverse().join('');
    return (num == num1) ? "Yes it is a palindrome" : "No it is not a palindrome";
}
console.log(isPalindrome("121")); // Output: Yes it is a palindrome
console.log(isPalindrome("911")); // Output: No it is not a palindrome
console.log(isPalindrome("madam")); // Output: Yes it is a palindrome
console.log(isPalindrome("0")); // Output: No it is not a palindrome
// Explanation: This function checks if the given string 'num' is a palindrome by reversing it and comparing it to the original string. If they are the same, it returns that it is a palindrome; otherwise, it states that it is not.