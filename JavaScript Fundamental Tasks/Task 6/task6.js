function mergeObjects(first, second) {
    return { ...first, ...second };
}

console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 }));