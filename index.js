//Check for palindrome

const string = "maadaam";

function isPalindrome(string) {
    const reverseString = string.split('').reverse().join('');
    return string === reverseString;
}

console.log(isPalindrome(string));