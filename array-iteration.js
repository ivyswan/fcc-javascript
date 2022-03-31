function greaterThanTen(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]); // [12, 14, 80]


function filteredArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) == -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)); // [[10, 8, 3], [14, 6, 23]]
console.log(filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2)); // [["flutes", 4]]
