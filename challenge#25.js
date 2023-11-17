// Write a function that will swap the first and last values in any given array. The default minimum length of the array is 2.
// For example, swapFirstLast([1,3,5]) should return [5, 3, 1]. swapFirstLast([1,3,5,7,9]) should return [9, 3, 5, 7, 1].

function swapFirstLast(arr) {
  if (arr.length < 2) {
    // Handle case where the array has less than 2 values
    console.log("Array must have at least 2 values.");
    return undefined; // or any other value that makes sense in your context
  }

  const firstValue = arr[0];
  const lastValue = arr[arr.length - 1];

  // Swap the first and last values
  arr[0] = lastValue;
  arr[arr.length - 1] = firstValue;

  return arr;
}

// Example usage:
const result1 = swapFirstLast([1, 3, 5]);
console.log(result1); // Output: [5, 3, 1]

const result2 = swapFirstLast([1, 3, 5, 7, 9]);
console.log(result2); // Output: [9, 3, 5, 7, 1]