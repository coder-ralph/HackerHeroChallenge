// Given an array with multiple values, write a function that returns a new array with two elements. The first value in the new array should be the minimum value in the original array. The second value in the new array should be the maximum value in the original array.
// For example, findMinMax([1,3,5]) should return [1, 5]. Similarly, findMinMax([-1,-3,10]) should return [-3, 10].

function findMinMax(arr) {
  if (arr.length === 0) {
    // Handle empty array case
    return undefined; // or any other value that makes sense in your context
  }

  let min = arr[0]; // Assume the first element is the minimum
  let max = arr[0]; // Assume the first element is the maximum

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      // If current element is smaller than current min, update min
      min = arr[i];
    }

    if (arr[i] > max) {
      // If current element is greater than current max, update max
      max = arr[i];
    }
  }

  return [min, max];
}

// Example usage:
const array1 = [1, 3, 5];
const result1 = findMinMax(array1);
console.log(result1); // Output: [1, 5]

const array2 = [-1, -3, 10];
const result2 = findMinMax(array2);
console.log(result2); // Output: [-3, 10]
