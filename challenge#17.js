// Given an array with multiple values, write a function that returns the maximum number in the array.
// For example, findMax([-3,3,5,7]) should return 7.

function findMax(arr) {
  if (arr.length === 0) {
    // Handle empty array case
    return undefined; // or any other value that makes sense in your context
  }

  let max = arr[0]; // Assume the first element is the maximum

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      // If current element is greater than current max, update max
      max = arr[i];
    }
  }

  return max;
}

// Example usage:
const array = [-3, 3, 5, 7];
const maxNumber = findMax(array);
console.log(maxNumber); // Output: 7
