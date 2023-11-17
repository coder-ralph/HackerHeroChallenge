// Build function that accepts array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.
// For example, addSevenToMost([1,3,5]) should return [10, 12]. addSevenToMost([1, 3, 5, 7]) should return [10, 12, 14].

function addSevenToMost(arr) {
  if (arr.length < 2) {
    // Handle case where the array has less than 2 values
    console.log("Array must have at least 2 values.");
    return undefined; // or any other value that makes sense in your context
  }

  const newArray = [];

  for (let i = 1; i < arr.length; i++) {
    newArray.push(arr[i] + 7);
  }

  return newArray;
}

// Example usage:
const result1 = addSevenToMost([1, 3, 5]);
console.log(result1); // Output: [10, 12]

const result2 = addSevenToMost([1, 3, 5, 7]);
console.log(result2); // Output: [10, 12, 14]
