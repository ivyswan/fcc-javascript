// Replace Loops using Recursion

function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
}

// multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]
function multiply(arr, n) {
    if (n <= 0) {
        return 1;
    } else {
        return multiply(arr, n - 1) * arr[n - 1];
    }
}

// exercise
function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
    // Only change code above this line
}

sum([1], 0); // 0
sum([2, 3, 4], 1); // 2
sum([2, 3, 4], 1); // 9