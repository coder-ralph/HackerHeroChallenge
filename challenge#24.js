// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. If the array that was passed to the function has less than two elements, have the function return false.
// For example, greaterThanSecond([1,3,5,7]) should return [5, 7]. Similarly, greaterThanSecond([0, -3, 2, 5]) should return [0, 2, 5]. Also, greaterThanSecond([2]) should return false.

function greaterThanSecond(arr) {
  if (arr.length < 2) {
    // Handle case where the array has less than 2 values
    return false;
  }

  const secondValue = arr[1];
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondValue) {
      // If current element is greater than the second value, add it to the new array
      newArray.push(arr[i]);
    }
  }

  return newArray;
}

// Example usage:
const result1 = greaterThanSecond([1, 3, 5, 7]);
console.log(result1); // Output: [5, 7]

const result2 = greaterThanSecond([0, -3, 2, 5]);
console.log(result2); // Output: [0, 2, 5]

const result3 = greaterThanSecond([2]);
console.log(result3); // Output: false
