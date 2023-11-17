// Given an array, print/log the sum of the first value in the array, 
// plus the array’s length. Assume that the array is composed of numbers.

function firstPlusLength(arr) {
  if (arr.length > 0) {
    const sum = arr[0] + arr.length;
    console.log(sum);
  } else {
    console.log("The array is empty.");
  }
}

// Example usage:
const exampleArray = [3, 7, 1, 4, 9];
firstPlusLength(exampleArray);