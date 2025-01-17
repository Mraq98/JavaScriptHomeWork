function romanTranslator(s) {
    const romNums = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000};
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        if (romNums[s[i]] < romNums[s[i + 1]]) {
            sum -= romNums[s[i]];
        } else {
            sum += romNums[s[i]];
        }
    }
    return sum;
}