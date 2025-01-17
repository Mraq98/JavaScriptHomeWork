function isPalindrome(x) {
    if (x < 0) {
        return false;
    }
    let str = x.toString();
    return str === str.split('').reverse().join('');
}