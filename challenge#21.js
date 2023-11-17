// Given an array, write a function that prints values that are greater than its 2nd value in the array.
// For example, given [1,3,5,7,9,13], it should print/log 5, 7, 9, and 13. Assume that the array has at least 2 values. Have the function also return the sum of the numbers that were printed/logged.

function valGreaterThanSecond(arr) {
  if (arr.length < 2) {
    // Handle case where the array has less than 2 values
    console.log("Array must have at least 2 values.");
    return undefined; // or any other value that makes sense in your context
  }

  const secondValue = arr[1];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondValue) {
      // If current element is greater than the second value, log/print it
      console.log(arr[i]);
      sum += arr[i];
    }
  }

  return sum;
}

// Example usage:
const array = [1, 3, 5, 7, 9, 13];
const sumOfValues = valGreaterThanSecond(array);
console.log("Sum of values:", sumOfValues);