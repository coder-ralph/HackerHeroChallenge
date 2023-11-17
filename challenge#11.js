// Given an array, write a function that only prints/logs its positive value.
// For example, printPositives([-1,3,-5, 10]) prints/logs 3, 10.

function printPositives(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      console.log(arr[i]);
    }
  }
}

// Example usage:
const exampleArray = [-1, 3, -5, 10];
printPositives(exampleArray);
