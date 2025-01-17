function numsSum(nums, target) {
    const numToIndex = new Map();
    for (const [index, num] of nums.entries()) {
        const complement = target - num;
        if (numToIndex.has(complement)) {
            return [numToIndex.get(complement), index];
        }
        numToIndex.set(num, index);
    }
}