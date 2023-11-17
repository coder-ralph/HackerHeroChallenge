// Add odd integers from -25,000 to 30,000 and have the function return its final sum. Is there a short cut?

function addOddInts() {
  let sum = 0;

  for (let i = -24999; i <= 30000; i += 2) {
    sum += i;
  }

  return sum;
}

// Call the function to see the output
const result = addOddInts();
console.log("Sum of odd integers:", result);

