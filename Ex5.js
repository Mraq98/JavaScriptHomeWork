function checkValid(s) {
    let stack = [];
    let pairs = { ')': '(', '}': '{', ']': '[' };
    for (let ch of s) {
        if (pairs[ch]) {
            if (stack.pop() !== pairs[ch]) return false;
        } else {
            stack.push(ch);
        }
    }
    return stack.length === 0;
}
