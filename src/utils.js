// Your code here

function reverse(str) {
    return str.split('').reverse().join('');
}

// check if a string is a palindrome
export function isPalindrome(str) {
   
    // let rev = "";
    // for (let i = str.length - 1; i >= 0; i--) {
    //     rev += str[i];
    // }
    // if (rev == str) {
    //     return true
    // } else {
    //     return false;
    // }
   
    if (!/^[A-Za-z]+$/.test(str)) {
        throw new Error("Invalid input");
      }
      const lowerCaseWord = str.toLowerCase();
      return lowerCaseWord === reverse(lowerCaseWord);

}