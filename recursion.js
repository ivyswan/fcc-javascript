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


// **** Use Recursion to Create a Countup and Countdown ****
// Countup
function countup(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countup(n - 1);
        countArray.push(n);
        return countArray;
    }
}
// The value [1, 2, 3, 4, 5] will be displayed in the console
console.log(countup(5));

// Countdown
function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countdown(n - 1);
        countArray.unshift(n);
        return countArray;
    }
}

// **** Use Recursion to Create a Range of Numbers ****
function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
        return [startNum];
    } else {
        let countArray = rangeOfNumbers(startNum, endNum - 1);
        countArray.push(endNum);
        return countArray;
    }
};

// rangeOfNumbers(1, 5) should return [1, 2, 3, 4, 5]
// rangeOfNumbers(4, 4) should return [4]