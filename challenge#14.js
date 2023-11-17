// Given an array with multiple values, write a function that replaces each value in the array with the product of the original value multiplied by itself.
// For example, squareVal( [1, 3, 5] ) should return [1, 9, 25].

function squareVal(arr) {
  const resultArray = [];

  for (let i = 0; i < arr.length; i++) {
    resultArray.push(arr[i] * arr[i]);
  }

  return resultArray;
}

// Example usage:
const exampleArray = [1, 3, 5];
const result = squareVal(exampleArray);
console.log(result); // Output: [1, 9, 25]
