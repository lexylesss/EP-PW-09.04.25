function countOccurrences(array, target) {
    let count = 0;
    for (let item of array) {
        if (item === target) count++;
    }
    return count;
}

countOccurrences([1, 2, 2, 3, 2, 4], 2);
countOccurrences(['a', 'b', 'a', 'c'], 'a');