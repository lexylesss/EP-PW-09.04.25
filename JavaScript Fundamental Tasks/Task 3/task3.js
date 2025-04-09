function reverseArray(items) {
    const reversed = [];
    for (let i = items.length - 1; i >= 0; i--) {
        reversed.push(items[i]);
    }
    return reversed;
}

reverseArray([1, 2, 3, 4]);
reverseArray(['a', 'b', 'c']);