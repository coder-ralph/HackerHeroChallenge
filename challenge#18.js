// Given an array with multiple values, write a function that returns the minimum value in the array.
// For example findMin([0,3,-5]) should return -5.

function findMin(arr) {
  if (arr.length === 0) {
    // Handle empty array case
    return undefined; // or any other value that makes sense in your context
  }

  let min = arr[0]; // Assume the first element is the minimum

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      // If current element is smaller than current min, update min
      min = arr[i];
    }
  }

  return min;
}

// Example usage:
const array = [0, 3, -5];
const minNumber = findMin(array);
console.log(minNumber); // Output: -5

