// Given two numbers passed to the function, return a new array of length num1 with each value num2.
// For example, thisLengthThatValue(3,5) should return [5, 5, 5]. thisLengthThatValue(2, 10) should return [10, 10].

function thisLengthThatValue(num1, num2) {
  const resultArray = [];

  for (let i = 0; i < num1; i++) {
    resultArray.push(num2);
  }

  return resultArray;
}

// Example usage:
const result1 = thisLengthThatValue(3, 5);
console.log(result1); // Output: [5, 5, 5]

const result2 = thisLengthThatValue(2, 10);
console.log(result2); // Output: [10, 10]
