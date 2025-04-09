function objectToArray(data) {
    const entries = [];
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            entries.push([key, data[key]]);
        }
    }
    return entries;
}

objectToArray({ name: 'Alice', age: 25 });

objectToArray({ city: 'New York', country: 'USA' });