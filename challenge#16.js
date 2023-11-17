// Given an array of multiple values, write a function that returns the sum of its numbers.
// For example, findSum([1,2,3]) should return 6.

function findSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

// Example usage:
const exampleArray = [1, 2, 3];
const result = findSum(exampleArray);
console.log(result); // Output: 6
