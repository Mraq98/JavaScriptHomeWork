function removeDuplicates(arr) {
    let k = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || arr[i] !== arr[i - 1]) {
            arr[k] = arr[i];
            k++;
        }
    }
    for (let i = k; i < arr.length; i++) {
        arr[i] = "_"
    }
    return k;
}