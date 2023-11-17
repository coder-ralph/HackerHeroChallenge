// Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0.
// When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function noNeg(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  return arr;
}

// Example usage:
const exampleArray = [1, 5, 10, -2];
noNeg(exampleArray);
console.log(exampleArray); // Output: [1, 5, 10, 0]
