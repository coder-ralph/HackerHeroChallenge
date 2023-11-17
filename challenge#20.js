// Given array of numbers, create function to replace last value with number of positive values.
// Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

function countPositives(arr) {
  if (arr.length === 0) {
    // Handle empty array case
    return arr;
  }

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      // If current element is positive, increment count
      count++;
    }
  }

  // Replace the last element with the count of positive values
  arr[arr.length - 1] = count;

  return arr;
}

// Example usage:
const array = [-1, 1, 1, 1];
const modifiedArray = countPositives(array);
console.log(modifiedArray); // Output: [-1, 1, 1, 3]
