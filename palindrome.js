function isPalindrome(str) {
    const formattedStr = str.toLowerCase();//case insensitive so changed toLowerCase()
    const len = formattedStr.length;//this gives length

    for (let i = 0; i < len / 2; i++) {
        if (formattedStr[i] !== formattedStr[len - 1 - i]) {
            return false;
        }//this is first and last letter ,2 and last but one
    }

    return true;
}
console.log(isPalindrome("Nan"));

module.exports = isPalindrome;