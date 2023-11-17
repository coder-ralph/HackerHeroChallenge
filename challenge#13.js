// Given an array, write a function that returns a new array where each negative value was converted to a positive value.
// For example, bePositive([-1,-3,-5]) returns [1, 3, 5]. A positive number in the original array should remain as positive, so that each number in the new array is all positive.

function bePositive(arr) {
  const resultArray = [];

  for (let i = 0; i < arr.length; i++) {
    resultArray.push(Math.abs(arr[i]));
  }

  return resultArray;
}

// Example usage:
const exampleArray = [-1, -3, -5];
const result = bePositive(exampleArray);
console.log(result); // Output: [1, 3, 5]
