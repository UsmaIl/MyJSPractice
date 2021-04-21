const _mergeArrays = (a, b) => {
    const c = []

    while (a.length && b.length) {
        c.push(a[0] > b[0] ? b.shift() : a.shift());
    }

    while (a.length) {
        c.push(a.shift());
    }

    while (b.length) {
        c.push(b.shift());
    }

    return c;
}

const mergeSort = (arr) => {
    if (arr.length < 2) return arr;
    const middle = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, middle);
    const rightArr = arr.slice(middle, arr.length)
    const sortedLeftArr = mergeSort(leftArr);
    const sortedRightArr = mergeSort(rightArr);
    return _mergeArrays(sortedLeftArr, sortedRightArr);
}

console.log(mergeSort([19, 20, 33, 0, 2, 4, -1, 214, 4449, -444432532, -10, 21, 99, 12, 76, 30, -40]));
