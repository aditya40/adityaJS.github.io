function checkPalindrome(word) {    
    const l = word.toLowerCase().length;
    for (i = 0; i < l / 2; i++) {
        if (word.charAt(i) !== word.charAt(l - 1 - i)) {
            return false;
        }
    }
    return true;
}



if (checkPalindrome("ibu ratna antar ubi")) {
    console.log("Palindrome");
} else {
    console.log("Bukan Palindrome");
}